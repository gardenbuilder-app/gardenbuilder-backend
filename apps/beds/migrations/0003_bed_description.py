from django.conf import settings
from django.db import migrations, models

# adding the description to the database on the beds_bed table
class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('beds', '0002_bed_owner'),
    ]

    operations = [
        migrations.AddField(
            model_name='bed',
            name='description',
            field= models.CharField(max_length=60, blank=True),
        ),
    ]
