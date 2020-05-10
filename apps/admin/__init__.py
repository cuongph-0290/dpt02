from django.apps import AppConfig

class AdminAppConfig(AppConfig):
  name = 'apps.admin'
  label = 'admin'
  verbose_name = 'Admin'

default_app_config = 'apps.admin.AdminAppConfig'
