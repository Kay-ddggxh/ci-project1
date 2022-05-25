# Lowland Pride 🏳‍🌈

![responsive mock-up](https://github.com/Kathrin-ddggxh/ci-project1/blob/main/assets/images/responsive-mockup.PNG?raw=true)
Welcome to Lowland Pride! This is the website of the Burren Lowland's first LGBTQ+ youth group. 
The site is targeted towards members of the LGBTQ+ community aged 14-25 who live in the rural areas of the at the base of the Burren, centering on Gort, Co. Galway and reaching into West Clare.
The Lowland Pride's site provides young people with a schedule of weekly meet-ups, dates and information on special events and how to join the group.

Visit live site [here](https://kathrin-ddggxh.github.io/ci-project1/).

## Design
***
This site was created and designed with young adults and teenagers in mind who are looking for information and access to a very specific group in their own locality. It was built with a mobile-first approach, keeping in mind that most of the target audience would access the site via phone or other mobile device. The content is short and informative, the style colourful and reassuring.

### Wireframes
- The first wireframe in [Figma](https://www.figma.com/file/wT3sdUsGl5XI6l3T6eq9bs/CI-Project-1?node-id=35%3A111) is a very simple design. It also shows an alternative option for the homepage layout which could be implemented in the future.

### Font and Colour choices
**Fonts:** "Irish Grover" was chosen for its Irish theme, given that the site targets a specific rural Irish community. "Nunito", with its rounded edges brings along a soft, gentle yet playful appearance, ideal for young users belonging to a minority group.

**Colours:** A light purple is the main colour of the site, referring to the often represented colour of a lot of pride flags. The general rainbow theme of the pride movement is reflected in the logo and throughout the images on the site.

## Features
***
This site implements the very basic features of a static website.

### Existing Features
- **Navigation Bar**
    - Featured in the header of all four pages. Includes the club's logo and links to Home page, About page, Events page and Contact form. 
    - Uniform format allows for easy navigation on all pages without the use of the "back" button.

    ![navbar](https://github.com/Kathrin-ddggxh/ci-project1/blob/main/assets/images/readme-images/navbar.PNG?raw=true)

- **Hero image and Banner text**
    - The hero background image and text design is consistent throughout the site, while text content varies to match the page content.
    - The hero image had some opacity added in order to increase the contrast between the header text and the image.

    ![hero section](https://github.com/Kathrin-ddggxh/ci-project1/blob/main/assets/images/readme-images/hero.PNG?raw=true)

- **Main Content**
    - All main sections throughout the site maintain a consistent layout and styling in order to convey information clearly.
    - Subtle borders of the site's primary colour surround each section to give a clear division of information.

    ![main content](https://github.com/Kathrin-ddggxh/ci-project1/blob/main/assets/images/readme-images/main-home.PNG?raw=true)

- **Home Gallery** 
    - A simple gallery of images at the bottom of the hompage adds a visual insight into the club the site is portraying.
    - Images are supposed to show important or fun moments for club members.

    ![home gallery](https://github.com/Kathrin-ddggxh/ci-project1/blob/main/assets/images/readme-images/gallery-home.PNG?raw=true)

- **Footer**
    - The footer element contains 3 icons, linking to the main social media platforms.
    - The icons are styled in the sites primary colour.
    - The footer is consistent througout all pages.

    ![footer](https://github.com/Kathrin-ddggxh/ci-project1/blob/main/assets/images/readme-images/footer.PNG?raw=true)

- **Rules section**
    - The club rules section can be found on the About page of the site.
    - A very important element, it lists the rules all members of the club must adhere to.

    ![rules](https://github.com/Kathrin-ddggxh/ci-project1/blob/main/assets/images/readme-images/rules.PNG?raw=true)

- **Events calender**
    - The table listing the regularly occuring club meetings is displayed on the Events page.
    - Days that host the event are highlighted with the site's primary colour.

    ![events calender](https://github.com/Kathrin-ddggxh/ci-project1/blob/main/assets/images/readme-images/events-calender.PNG?raw=true)

- **Events details**
    - The events details section is located below the events calender.
    - The section explains what activities take place during each event, both regular and special events.
    - An image below every event description offers a visual example of each.

    ![events details](https://github.com/Kathrin-ddggxh/ci-project1/blob/main/assets/images/readme-images/events-details.PNG?raw=true)

- **Contact form**
    - On the last page of the site users can find a contact form to fill in and submit to get in touch with the club.
    - Name and email are mandotory fields, location and message are optional.
    - Currently, submitting the form will take the user to the form dump page provided by Code Institute.

    ![form](https://github.com/Kathrin-ddggxh/ci-project1/blob/main/assets/images/readme-images/form.PNG?raw=true)

- **404 Error page**
    - In the event of a 404 "page not found" error, the user will be directed to a customized error page which is keeping with the style of the site and also has a little reassuring message.

    ![404 page](https://github.com/Kathrin-ddggxh/ci-project1/blob/main/assets/images/readme-images/404.PNG?raw=true)

### Possible Future Features
- Modal for events page:  

    I would like to implement a modal for the calender events. So far, the details of the weekly events are simply listed and explained below the calender. In future it would be nice to have them pop up in a modal when either hovering or clicking on the events in the calender.

- Include loading="lazy" attribute for images

    Once this attribute has full support from all commonly used browsers I aim to include it to all images on site in order to reduce data usage and improve rendering speed.

- Create carousel for homepage gallery

    At the moment the homepage gallery is static. I would like to implement a carousel in the future that would also allow for more images in the gallery.

- Include address and map iframe

    In the event of the club ever getting established, a section will be added to pin the clubs location on a map iframe, as well as the postal address.

## UX
***
### Site goals
The goal of this site is to provide LGBTQ+ teens and young adults of the wider Gort (Ireland) region with an easy to navigate club website. The site aims to present the necessary information in a simple, straight forward manner (including club rules, event schedule and details), as well as provide a way of contacting the club for potential new members.

### User Stories

**As a site visitor:**

- I want to quickly find out the clubs main activities and aims.
- I want to be able to see where the club operates.
- I want to know if I am a suitable canditate to be a club member.
- I want to learn about the club rules.
- I want to find out when the club members meet.
- I want to know what happens during meetings and events.
- I want to be able to get in contact with the club and make inquiries.
- I want to be able to easily navigate between pages on all devices.
- I want to see a mobile friendly layout and responsive design.

**As the site administrator:**

- I want to be able to update the events calender.
- I want to be able to update and add new events on the events listing.
- I want to be able to add more relevant images to the site and create a more extensive gallery.

## Testing
***
### Validator Testing
- HTML ([W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html))
    - 1 Error: "Element div not allowed as child of element button in this context. (Suppressing further errors from this subtree.)"; 
    referring to 3 ```<div class="burger-bar"></div>``` elements that make up the burger menu button
    - Solution: Changed ```div``` elements to ```span``` with ```display: block;```   
- CSS ([Jigsaw](https://jigsaw.w3.org/css-validator/))
    - No error found
- Accessibility ([axe DevTools](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd))
    - added ```title``` and ```aria-label``` attributes to all social links and home link logo to improve accessibility
- Performance, Accessibility, SEO, Best Practices (Lighthouse Chrome DevTools)
    - ![Lighthouse rating](https://github.com/Kathrin-ddggxh/ci-project1/blob/main/assets/images/readme-images/lighthouse-rating.PNG?raw=true)
- Browser Support ([CanIUse](https://caniuse.com/))
    - ```gap``` property for Flexbox: according to caniuse.com this property has a global support of 88.95%
    - ```loading="lazy"``` attribute on images: not yet fully supported by most browsers; to be included in the future

### Browser Testing

**Layout:** Testing layout and appearance of site for consistency throughout browsers.

**Functionality:** Ensuring all links, navigation and form submit functions as expected throughout browsers.

| Browser     | Layout      | Functionality |
| :---------: | :----------:| :-----------: |
| Chrome      | ✔          | ✔             |
| Edge        | ✔          | ✔             |
| Firefox     | ✔          | ✔             |
| Safari      | ✔          | ✔             |
| IE          |deprecated by Microsoft, not tested|

### Manual Testing

| Feature     | Expect      | Action        | Result |
| :---------: | :----------:| :-----------: | :-----:|
| **Logo Icon**   | When clicked, home page will open   | Clicked Logo Icon  | Home page opened when clicked |
| **Navbar Buttons**  | When clicked, the respective page will open  | Clicked all individual navbar buttons | All respective pages opened when button was clicked |
| **Rule link on home page main** | When clicked, About page will open and scroll to rule section  | Click rule link | About page opens and scrolls to rule section |
| **Contact link on About page main** | When clicked,the Contact page will open | Click contact link | Contact page opens |
| **Social link icons** | Social link icons open relevant websites in new tab when clicked| Click all individual icons | All respective sites open in new tab |
| **Form submit button** | Form submits when submit button is clicked | Fill out form and click submit button | CI form dump page opens and displays form contents |
| **Required form fields** | form will not submitif required fields are blank and fields will be highlighted and flagged | Fill out form incorrectly | Form does not submit and highlights incorrectly filled in fields |

### Testing User Stories

| Expectation                         | Result                          |
| :---------------------------------: | :------------------------------:|
| I want to quickly find out the clubs main activities and aims | As a visitor, I can quickly read through the main content of the home and about page and find out what the club does |
| I want to be able to see where the club operates | As a visitor, I can find the "Where" section easily on the about page which tells me where the club operates |
| I want to know if I am a suitable canditate to be a club member | As a visitor, I can find the "Who" section easily on the about page which tells me who can join the club |
| I want to learn about the club rules | As a visitor, I find the rules section on the about page, which is also linked on the home page |
| I want to find out when the club members meet | As a visitor, I can see a clearly structured schedule of regular meetings on the events page |
| I want to know what happens during meetings and events | As a visitor, I can find the event details on the events page |
| I want to be able to get in contact with the club and make inquiries | As a visitor, I can easily navigate to the contact page and fill in the contact form |
| I want to be able to easily navigate between pages on all devices | As a visitor, I can use the static navbar on large screens or burger menu on small and medium screens to navigate between pages |
| I want to see a mobile friendly layout and responsive design | As a visitor, I have a good view of the site on mobile device without overflow or side-scrolling |



### Fixed Bugs
#### 405 Error on form submit
Initially, when clicking the submit button on the contact form, the button would link to submit.html, displaying a "form submit successful" message and a "Back Home" button. On the deployed site this would bring up a 405 error (Not allowed).
As submit.html was not a valid action for form POST method, I had to use the Code Institute form dump provided to students.



### Unfixed bugs
No unfixed bugs to date.

## Deployment
***
This site was deployed via GitHub pages using the following steps:
- From the GitHub repository, navigate to **Settings**
- In the left-hand navigation section select **Pages**
- From the source section drop-down menu change Branch from **none** to **main** and click the **Save**
- After several minutes the website is live and will be automatically refreshed with each Git push command.

The link to the live site is: https://kathrin-ddggxh.github.io/ci-project1/ 

To run locally:
- Log into GitHub and click on repository to download ([ci-project1](https://github.com/Kathrin-ddggxh/ci-project1))
- Select **Code** and click "Download the Zip file.
- Once download is completed, extract ZIP file and use in your local environment.

Alternatively you can **Clone** or **Fork** this repository into your GitHub account.

## Credits
***
### Media

Photographs with specific Irish LGBTQ content were taken from:
- https://www.galwaytourism.ie/event/galway-pride-festival/
- https://www.nxf.ie/
- https://northwestadventuretours.ie/ (Instagram feed)
- https://insighttreatment.com/
- http://thrivetherapyandcounseling.com/

All stock images were sourced from the following open source sites:
- [Pexels](https://www.pexels.com/)
- [Pixabay](https://pixabay.com/)
- [Unsplash](https://unsplash.com/)

### Code

Heart Icon: 
- https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/create-a-more-complex-shape-using-css-and-html
- https://unused-css.com/blog/css-half-circle/

Burger Menu:
- https://www.w3schools.com/howto/howto_js_mobile_navbar.asp


### Content
- Fonts were taken from [Google fonts](https://fonts.google.com/)
- Social media icons were taken from [Font Awesome](https://fontawesome.com/icons)



    
