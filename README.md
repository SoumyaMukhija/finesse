# Finesse

A UI-UX improvement of finesse.us

## Issues in the current mobile-app

Currently, the products page of the finesse.us mobile app is difficult to navigate due to the counterintuitive design where the action buttons are placed far apart, the font-style is difficult to read. The product is not the highlight of the page due to the abundance of text and other elements on it.



## Modifications

### This app has been created with better UX in mind

1. **Improved Font**: The font has been modified to improve legibility and make it easier for users to navigate the app.

2. **Enhanced Product Display**: The app now has a full-screen product display, ensuring the product takes center stage, and users can easily access the product options.

3. **Better Size Buttons**: The 'size' buttons have been redesigned to enhance their visual appeal and encourage users to interact with them to select their preferred product size.

4. **Sticky Action Buttons**: The add-to-cart and pay-with-apple-pay buttons are now sticky, meaning they remain visible at all times, regardless of where the user scrolls, encouraging users to take action easily.

5. **Improved Cart Icon**: The cart is now represented by a symbol rather than text, which simplifies the user interface and makes it more intuitive.

6. **Optimized Action Buttons**: The search and cart action buttons are now located together for ease of use, streamlining the user experience and making it more efficient.

7. **Minimalistic Design**: To keep the product page clean and minimalistic, the option for a menu has been removed. This ensures that users can focus solely on the products without any distractions.



## Performance issues in the finesse.us app
Identified using LightHouse.

1. The First Contentful Paint (FCP) is 3.5s and Largest Contentful Paint (LCP) is 7s. This means that the visual performance of the web page is not great and can lead to a poor user experience, which in turn can negatively impact bounce rates and overall engagement. FCP and LCP can be optimized by using lazy loading, using CDNs to store images, utilizing browser caching for assets, etc. 

2. Total Blocking Time (TBT) is 1,100 ms. A good TBT should be less than 300 ms.This can be optimized by using CDNs, removing unused Javascript so that JS execution time is minimized, removing render-blocking resources, etc.

3. Amount of third-party code should be minimized to improve time complexity. Third-party code is currently blocking the main thread for some time right now (730 ms last checked). 
