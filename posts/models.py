from django.db import models
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User

class Post(models.Model):
#    author = models.ForeignKey(get_user_model())
    author = models.ForeignKey(User)
    content = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return '{0}'.format(self.content)
