from django.db import models


class Movie(models.Model):
    name = models.CharField(max_length=125)
    image = models.ImageField(upload_to="movies")
    story = models.TextField(max_length=1500)
    creates = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name