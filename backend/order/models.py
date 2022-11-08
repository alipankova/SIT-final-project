from django.contrib.auth import get_user_model
from django.db import models
from product.models import Product

User = get_user_model()

class Order(models.Model):

    OPEN = "OP"
    CLOSED = "CL"
    PAID = "PA"
    SHIPPED = "SH"

    STATUS_CHOICES = [
        (OPEN, "open"),
        (CLOSED, "closed"),
        (PAID, "paid"),
        (SHIPPED, "shipped"),
    ]

    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default=OPEN)
    content = models.TextField(max_length=500, blank=True)
    buyer = models.ForeignKey(User, related_name='order', on_delete=models.PROTECT, blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    products = models.ManyToManyField(to=Product, related_name='order', blank=True)
    # Infos that can come from the User or the Frontend Form:
    email = models.EmailField(max_length=30, blank=True)
    first_name = models.TextField(max_length=30, blank=True)
    last_name = models.TextField(max_length=30, blank=True)
    street = models.TextField(max_length=30, blank=True)
    street_number = models.IntegerField(null=True)
    zip = models.IntegerField(null=True)
    city = models.TextField(max_length=30, blank=True)
    country = models.TextField(max_length=30, blank=True)
    # Infos that have to come from the Frontend Form:
    phone = models.TextField(max_length=30, blank=True)
    shipping_note = models.TextField(max_length=200, blank=True)

    def __str__(self):
        return f'ID {self.pk}: {self.title}'


