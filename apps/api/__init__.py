from django.apps import AppConfig

class ApiAppConfig(AppConfig):
  name = 'apps.api'
  label = 'api'
  verbose_name = 'Api'

default_app_config = 'apps.api.ApiAppConfig'
