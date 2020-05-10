from django.apps import AppConfig

class DashboardAppConfig(AppConfig):
  name = 'apps.dashboard'
  label = 'dashboard'
  verbose_name = 'Dashboard'

default_app_config = 'apps.dashboard.DashboardAppConfig'
