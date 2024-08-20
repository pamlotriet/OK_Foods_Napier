import { Component } from '@angular/core';
import { CardComponent } from 'app/shared/components/card/card.component';

@Component({
  selector: 'app-updates',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './updates.component.html'
})
export class UpdatesComponent {
// mockUpdates.ts
  mockUpdates = [
  {
    heading: "New Organic Product Line Launch",
    date: "2024-08-20",
    value: "We are excited to introduce our new line of organic products at OK Foods Napier! From fresh, organically grown fruits and vegetables to eco-friendly pantry staples, our new range ensures that you can enjoy healthier options without compromising on quality. Visit our store to explore our expanded selection and discover the benefits of organic living."
  },
  {
    heading: "Seasonal Produce Arrival",
    date: "2024-08-19",
    value: "Autumn is here, and so is our selection of seasonal produce! We’re delighted to offer a variety of fresh, locally sourced pumpkins, squashes, and apples. Perfect for hearty soups, pies, and cozy dinners, our seasonal produce is picked at the peak of freshness. Don’t miss out on these fall favorites!"
  },
  {
    heading: "Price Reduction on Popular Items",
    date: "2024-08-18",
    value: "Great news! We’ve reduced prices on some of our most popular items, including pasta, cereals, and dairy products. This is our way of saying thank you for your continued support. Stop by OK Foods Napier and take advantage of these fantastic savings on your everyday groceries."
  },
  {
    heading: "New Vegan Options Available",
    date: "2024-08-17",
    value: "We’ve expanded our product range to include a variety of exciting new vegan options! From plant-based cheeses to dairy-free ice creams and vegan snacks, our new selections cater to all dietary preferences. Come in and check out our updated vegan section to find your new favorite products."
  },
  {
    heading: "Local Supplier Spotlight",
    date: "2024-08-16",
    value: "This month, we’re proud to spotlight our partnership with local supplier Green Valley Farms. Their commitment to sustainable farming practices aligns with our values, and their fresh, high-quality produce is now available in our store. Support local and enjoy the best of what our community has to offer!"
  },
  {
    heading: "New Store Hours",
    date: "2024-08-15",
    value: "To better serve you, we’ve updated our store hours! OK Foods Napier is now open from 8 AM to 8 PM, seven days a week. Whether you need to do your shopping early in the morning or late in the evening, we’re here to accommodate your schedule."
  },
  {
    heading: "Weekly Specials and Discounts",
    date: "2024-08-14",
    value: "Don’t miss our weekly specials! Every week, we offer exclusive discounts on select items, from fresh produce to pantry staples. Check out our in-store flyers or visit our website to see the latest deals and plan your shopping trip accordingly."
  },
  {
    heading: "Holiday Sale Announcement",
    date: "2024-08-13",
    value: "The holiday season is approaching, and we’re gearing up for our biggest sale of the year! Enjoy discounts on festive foods, gift items, and more. Mark your calendar for our holiday sale event and get everything you need for your celebrations at great prices."
  },
  {
    heading: "New Store Layout and Features",
    date: "2024-08-12",
    value: "We’re excited to announce some changes to our store layout to enhance your shopping experience! Our aisles are now better organized, and we’ve added a new bakery section featuring fresh bread and pastries. Come and explore the new features of OK Foods Napier!"
  },
  {
    heading: "Customer Feedback Survey",
    date: "2024-08-11",
    value: "Your feedback is important to us! We invite you to participate in our customer feedback survey to help us improve our services. Share your thoughts on your shopping experience, and you could win a gift card to use on your next visit. Thank you for helping us serve you better!"
  }
];

}
