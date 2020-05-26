from django.db import models

# Create your models here.

class Anime(models.Model):
	name = models.CharField(max_length=64)
	genre = models.CharField(max_length=64)
	episode = models.IntegerField()
	seasons = models.IntegerField()
	isadult = models.BooleanField()
		