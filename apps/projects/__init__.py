from django.apps import AppConfig

class ProjectsAppConfig(AppConfig):
  name = 'apps.projects'
  label = 'projects'
  verbose_name = 'Projects'

default_app_config = 'apps.projects.ProjectsAppConfig'
