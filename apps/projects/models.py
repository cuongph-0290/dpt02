from django.db import models
from django.contrib.auth.models import User

from apps.base.models import TimeStampMixin

class Project(TimeStampMixin, models.Model):
  title = models.CharField(max_length=255)
  abbreviation = models.CharField(max_length=255)
  description = models.TextField()

  start_date = models.DateField()
  end_date = models.DateField()

  def __str__(self):
    return self.title

  class Meta:
    db_table = 'projects'

class Team(TimeStampMixin, models.Model):
  title = models.CharField(max_length=255)
  abbreviation = models.CharField(max_length=255)
  description = models.TextField()

  projects = models.ManyToManyField(Project)
  members = models.ManyToManyField(User)

  def __str__(self):
    return self.title

  class Meta:
    db_table = 'teams'

class Position(TimeStampMixin, models.Model):
  title = models.CharField(max_length=255)
  abbreviation = models.CharField(max_length=255)
  description = models.TextField()

  members = models.ManyToManyField(User)

  def __str__(self):
    return self.title

  class Meta:
    db_table = 'positions'

class Skill(TimeStampMixin, models.Model):
  title = models.CharField(max_length=255)
  level = models.IntegerField(default=0)
  description = models.TextField()

  used_date = models.DateField()

  members = models.ManyToManyField(User)

  def __str__(self):
    return self.title

  class Meta:
    db_table = 'skills'

