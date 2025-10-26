import json
import smtplib
import ssl
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Send contact form submissions to email
    Args: event - dict with httpMethod, body
          context - object with request_id
    Returns: HTTP response dict
    '''
    method: str = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    body_data = json.loads(event.get('body', '{}'))
    
    name = body_data.get('name', '')
    email = body_data.get('email', '')
    phone = body_data.get('phone', '')
    message = body_data.get('message', '')
    form_type = body_data.get('formType', 'contact')
    
    smtp_host = os.environ.get('SMTP_HOST')
    smtp_port = int(os.environ.get('SMTP_PORT', '465'))
    smtp_user = os.environ.get('SMTP_USER')
    smtp_password = os.environ.get('SMTP_PASSWORD')
    email_to = os.environ.get('EMAIL_TO')
    
    msg = MIMEMultipart('alternative')
    msg['From'] = smtp_user
    msg['To'] = email_to
    msg['Subject'] = f'Новая заявка с сайта Dialecta ({form_type})'
    
    text_body = f'''
    Новая заявка с сайта
    
    Тип формы: {form_type}
    Имя: {name}
    Email: {email}
    Телефон: {phone}
    Сообщение: {message}
    '''
    
    html_body = f'''
    <html>
      <body style="font-family: Arial, sans-serif;">
        <h2>Новая заявка с сайта</h2>
        <p><strong>Тип формы:</strong> {form_type}</p>
        <p><strong>Имя:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Телефон:</strong> {phone}</p>
        <p><strong>Сообщение:</strong></p>
        <p>{message}</p>
      </body>
    </html>
    '''
    
    msg.attach(MIMEText(text_body, 'plain', 'utf-8'))
    msg.attach(MIMEText(html_body, 'html', 'utf-8'))
    
    context_ssl = ssl.create_default_context()
    
    with smtplib.SMTP_SSL(smtp_host, smtp_port, context=context_ssl) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, [email_to], msg.as_string())
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps({'success': True, 'message': 'Email sent successfully'})
    }
