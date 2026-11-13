
# Change Log
### This is Zi Yi's UED workshop changelog

## [Unreleased] - 2021-09-18

### Progress

Refined:
- Fixed Verification page bottom bug
- Changed user photo
- Optimized button response in User Profile page

## [Unreleased] - 2021-09-14

### Device Testing

### Android

#### Android Selected Device: 
- Xiao Mi 8

#### Reason to choose this device: 
- The screen size & resolution of Xiao Mi 8 are similar to the mainstream Android phones.

| Android Device | Screen Size  | Resolution |
| :------------ |:---------------:| -----:|
| Xiao Mi 8     | 6.21"           |  1080 x 2248 |
| Pixel 5       | 6.0"            |  2340 x 1080 |
| OnePlus 9     | 6.55"           |  1080 x 2400 |

#### Testing result:
- There is a high probability that the bottom of Verification Page will shift when the keyboard appears. But the recorded video didn't happen
- The sound effect of the Super Like button on the Profile Details Page didn't finish playing
- The card in Beeline can't be swiped smoothly (sometimes will be interrupted)
- The Profile Details Page's button (Like, Dislike & Super Like) in Beeline will affect the cards on Homepage
- Sometimes two alarms will occur when shaking on the Homepage

### iOS

#### iOS Selected Device: 
- iPhone 12

#### Reason to choose this device: 
- iPhone 12 is best selling model in 2021

#### Testing result:
- The card in Beeline can't be swiped smoothly (sometimes will be interrupted)
- The Profile Details Page's button (Like, Dislike & Super Like) in Beeline will affect the cards on Homepage
- Sometimes two alarms will occur when shaking on the Homepage

#### Added
- [iPhone 12 is best selling model in 2021 with almost no competition, and it is no surprise](https://www.indiatoday.in/technology/talking-points/story/iphone-12-is-best-selling-model-in-2021-with-almost-no-competition-and-it-is-no-surprise-1806216-2021-05-24)

## [Unreleased] - 2021-09-12

### Progress

Refined:
- Change another country code picker component (Android phone available now)
- Onboarding page layout
- The UX of Beeline page
- Element quality (icon, button, photo, background image)
- keyboard avoiding view in Phone log in page & Verification page
- Homepage more cards (6 cards in total)
- Keep the elements of the status bar in the dark

Added:
- Added icons in Boost & Spotlight button
- Add media page (image)
- User profile details page

## [Unreleased] - 2021-09-06

### Progress

Refined:
- The circle outline of the chat box is changed to use components
- The profile details page is separated from homepage and uses codes to display detailed information.

Added:
- Filter page sliders
- Super like sound effect
- Warning vibration
- Homapage shake to refresh cards function

## [Unreleased] - 2021-09-01

### Progress

Refined:
- Log in page design
- Phone log in page design
- Verification page design
- Onboarding page design
- Choose Date Mode page design

Added:
- Profile detail page
- Homepage swipe card detail
- Choose Date Mode page function

## [Unreleased] - 2021-08-24

### Progress

Refined:
- Button design (profile)
- Remove button drop shadow
- Lottie Animation

Added:
- Background image
- Chat box design
- Beeline content (swipeable)
- filter (not complete yet)
- Premium swiper

## [Unreleased] - 2021-08-17

### Progress

Refined:
- Bottom tab bar design
- Swipe loop (hompage)
- layout (profile & homepage)

Added:
- Phone login alert

## [Unreleased] - 2021-08-11

### Progress

Added:
- Country picker (phone login page)
- Swipeable card in homepage
- Beeline button (homepage)
- Option button (homepage)
- Rewind button (homepage)

## [Unreleased] - 2021-08-08

### Progress

Added:
- Profile page design layout

## [Unreleased] - 2021-08-01

### Progress
Refined:
- Homepage Facebook button (separate logo & words)
- Date Mode Selection button design

Added:
- Tab bar in home page

## [Unreleased] - 2021-07-22

### Progress
Refined:
- Decided fontFamily(Nunito,Roboto)
- Login page - button color(Facebook) & added icon
- Phone Login - Added back button
- Added Verification Code page
- Onboarding - Button layout & pattern
- Added Choose mode page

## [Unreleased] - 2021-07-11

### Progress
Linked pages:
- Login page
- Phone no login
- Onboarding
- SelectModePage (image only)
- Home page (image only)
- Profile (image only)
- Chatbox (image only)
- Setting (image only)
- Edit profile page (image only)
- Camera interface (image only)
- Beeline (image only)
- Let's Date (image only)

## [Unreleased] - 2021-06-27

### Progress
Added:
- Login page (completed layout)
- Phone no login (can key in number)
- Onboarding (3 lottie animations)

## [Unreleased] - 2021-06-20

### Research
This week I re-register a bumble account to observe its onboard content & design. And decide what lottie animation can apply in it.

Original app's onboarding design & content
- Yellow background
- No animation in onboarding
- just a simple icon and some content
- 3 onboard content
    - Make new friends at every stage of your life
    - Women make the first move
    - 24 hours to connect

### Added
- [User Story-Why do I prefer Bumble to Tinder](https://translate.google.com/translate?hl=&sl=zh-CN&tl=en&u=https%3A%2F%2Ftenten.co%2Fblog%2Fux-story-why-prefer-bumble-to-tinder%2F)

## [Unreleased] - 2021-06-14

### Research
This week I have downloaded bumble (dating app) and tested it around.

### Added
- [User Story-Why do I prefer Bumble to Tinder](https://translate.google.com/translate?hl=&sl=zh-CN&tl=en&u=https%3A%2F%2Ftenten.co%2Fblog%2Fux-story-why-prefer-bumble-to-tinder%2F)

## [Unreleased] - 2021-06-08

### Research
Found some npm package that can be used in the project.

### Added
- [React Native Chat UI implementation with an optional Firebase BaaS](https://reactnativeexample.com/react-native-chat-ui-implementation-with-an-optional-firebase-baas/)
  
- [React Native Tinder Style UI](https://reactnativeexample.com/react-native-tinder-style-ui/)

- [Tinder like react-native card stack swiper](https://reactnativeexample.com/tinder-like-react-native-card-stack-swiper/)
 
- [An easy to use component that allows displaying swipeable buttons](https://reactnativeexample.com/an-easy-to-use-component-that-allows-displaying-swipeable-buttons/)

- [A Tinder Clone app with React Native](https://reactnativeexample.com/a-tinder-clone-app-with-react-native/)

## [Unreleased] - 2021-05-30

### Research
Here is some research i did at the first week.

##### Things to pay attention when doing Lottie animations
###### Animate with textures
- It’s better to use vector textures — this way your final file will be smaller.
- When you are drawing the texture, keep it in mind that the fewer points and parts your texture has, the easier it will be to animate it. Also, by keeping your texture simple, you’re reducing the size of the final animation file.
- If that’s possible, don’t use masks in the animation, otherwise, bugs may appear in some browsers.
###### You can use:
- animated shapes of any kinds
- colors, opacity, gradients
- png/jpeg elements
- trim path
- repeater
###### You can’t or better not use:
- masks
- any sorts of effects except fill
- merge path

#### Mobile Landing Page Best Practices
- Be concise in your written copy
- Nail the content above the fold
- Keep your design super simple
- Make use of sticky bars
- Try shorter (and sweeter) copy
- Consider adding a click-to-call button
- Be sure everything loads lightning-fast
 
### Added
- [Top Principles How to Design Lottie Animations for your Website or App](https://medium.muz.li/top-principles-how-to-design-lottie-animations-for-your-website-or-app-bc8614880a1e)
  
- [Mobile Landing Page Examples That Seriously Set the Bar](https://unbounce.com/landing-page-examples/best-mobile-landing-page-examples/)

## [Unreleased] - References

### React Native Component
- npm. n.d. expo-linear-gradient. [online] Available at: <https://www.npmjs.com/package/expo-linear-gradient> [Accessed 20 September 2021].
- GitHub. n.d. GitHub - lottie-react-native/lottie-react-native: Lottie wrapper for React Native.. [online] Available at: <https://github.com/lottie-react-native/lottie-react-native> [Accessed 20 September 2021].
- GitHub. n.d. GitHub - react-native-card-stack-swiper. [online] Available at: <https://github.com/lhandel/react-native-card-stack-swiper> [Accessed 20 September 2021].
- GitHub. n.d. GitHub - react-native-card-stack-swiper. [online] Available at: <https://github.com/lhandel/react-native-card-stack-swiper> [Accessed 20 September 2021].
- GitHub. n.d. GitHub - react-native-circular-progress. [online] Available at: <https://github.com/bartgryszko/react-native-circular-progress> [Accessed 20 September 2021].
- GitHub. n.d. GitHub - react-native-confirmation-code-field. [online] Available at: <https://github.com/retyui/react-native-confirmation-code-field> [Accessed 20 September 2021].
- GitHub. n.d. GitHub - react-native-country-picker-modal. [online] Available at: <https://github.com/xcarpentier/react-native-country-picker-modal> [Accessed 20 September 2021].
- GitHub. n.d. GitHub - react-native-linear-gradient. [online] Available at: <https://github.com/react-native-linear-gradient/react-native-linear-gradient> [Accessed 20 September 2021].
- npm. n.d. react-native-progress-circle. [online] Available at: <https://www.npmjs.com/package/react-native-progress-circle> [Accessed 20 September 2021].
- GitHub. n.d. GitHub - react-native-svg. [online] Available at: <https://github.com/react-native-svg/react-native-svg> [Accessed 20 September 2021].
- GitHub. n.d. GitHub - react-native-swiper. [online] Available at: <https://github.com/leecade/react-native-swiper> [Accessed 20 September 2021].
- GitHub. n.d. GitHub - rn-range-slider. [online] Available at: <https://github.com/githuboftigran/rn-range-slider> [Accessed 20 September 2021].
- npm.io. n.d. Expo-status-bar NPM | npm.io. [online] Available at: <https://npm.io/package/expo-status-bar> [Accessed 20 September 2021].
- Expo Documentation. n.d. Haptics - Expo Documentation. [online] Available at: <https://docs.expo.dev/versions/latest/sdk/haptics/> [Accessed 20 September 2021].
- Reactnavigation.org. n.d. Stack Navigator. [online] Available at: <https://reactnavigation.org/docs/stack-navigator/> [Accessed 20 September 2021].
- Reactnavigation.org. n.d. Bottom Tabs Navigator. [online] Available at: <https://reactnavigation.org/docs/bottom-tab-navigator/> [Accessed 20 September 2021].


### User Photo
- Raymond, L., 2018. Login • Instagram. [online] Instagram.com. Available at: <https://www.instagram.com/p/Blh9y6mlepZlhyBNApepyPBau7laKJka1anC4o0/> [Accessed 15 September 2021].
- Raymond, L., 2021. Login • Instagram. [online] Instagram.com. Available at: <https://www.instagram.com/p/CL8lokTnUem-JLJEg5Ux3H4YtaY0ElFNUvxfDg0/> [Accessed 15 September 2021].
- Keyi, W., 2019. Login • Instagram. [online] Instagram.com. Available at: <https://www.instagram.com/p/BzmnDM2HQAS/> [Accessed 16 September 2021].
- Keyi, W., 2021. Login • Instagram. [online] Instagram.com. Available at: <https://www.instagram.com/p/CL0xv6qnXVK/> [Accessed 16 September 2021].
- Mint, L., 2020. Login • Instagram. [online] Instagram.com. Available at: <https://www.instagram.com/p/B-USs8wH5G6/> [Accessed 16 September 2021].
- Mint, L., 2020. Login • Instagram. [online] Instagram.com. Available at: <https://www.instagram.com/p/CEQD9ttnra5/> [Accessed 16 September 2021].
- Xin, H., 2018. Login • Instagram. [online] Instagram.com. Available at: <https://www.instagram.com/p/BlsR87JlA91/> [Accessed 16 September 2021].
- Xin, H., 2021. Login • Instagram. [online] Instagram.com. Available at: <https://www.instagram.com/p/CR80uFEFXQK/> [Accessed 16 September 2021].
- Xin, H., 2021. Login • Instagram. [online] Instagram.com. Available at: <https://www.instagram.com/p/CPgOx7Qn-I4/> [Accessed 16 September 2021].
- Xin, H., 2021. Login • Instagram. [online] Instagram.com. Available at: <https://www.instagram.com/p/CQEFjErnUtY/> [Accessed 16 September 2021].
- Keyi, W., 2019. Login • Instagram. [online] Instagram.com. Available at: <https://www.instagram.com/p/B4Wfk2wH-Bf/> [Accessed 16 September 2021].
- Qiong, W., n.d. Login • Instagram. [online] Instagram.com. Available at: <https://www.instagram.com/qiongyingxx/> [Accessed 16 September 2021].
- Qiong, W., 2021. Login • Instagram. [online] Instagram.com. Available at: <https://www.instagram.com/p/CL0wvVGHVyMX-twLdvr3N3EyAUi0PG2RCzgtQQ0/> [Accessed 16 September 2021].
- Qiong, W., 2021. Login • Instagram. [online] Instagram.com. Available at: <https://www.instagram.com/p/CP72JxDnAcTXnsFEtZ0agBjyJXwb6CcDlhIYsY0/> [Accessed 16 September 2021].
- Qiong, W., 2021. Login • Instagram. [online] Instagram.com. Available at: <https://www.instagram.com/p/CBLYpiXnURzVGJqoG0q4TsM3i61juHEV4RZny00/> [Accessed 16 September 2021].
- Yumeno, A., 2020. Login • Instagram. [online] Instagram.com. Available at: <https://www.instagram.com/p/CIqccJeFwE4/> [Accessed 16 September 2021].
- Julie, L., 2021. Login • Instagram. [online] Instagram.com. Available at: <https://www.instagram.com/p/CL8v16cHbfb/> [Accessed 16 September 2021].
- Julie, L., 2020. Login • Instagram. [online] Instagram.com. Available at: <https://www.instagram.com/p/CIF7dGXHUS3/> [Accessed 16 September 2021].
- M., K., 2020. 26 Best Selfie Poses For Guys To Look Charming – Macho Vibes. [online] Macho Vibes. Available at: <https://www.machovibes.com/best-selfie-poses-guys-to-look-charming/> [Accessed 17 September 2021].
- Walker, D., n.d. 62 Best Selfie Poses For Guys To Copy Right Now! - Fashion Hombre. [online] Fashion Hombre. Available at: <https://www.fashionhombre.com/best-selfie-poses-for-guys/> [Accessed 17 September 2021].

### Background Music & Sound Effect
- Music Only, C., 2020. MaxKoMusic - Space Technologies [Copyright Free Corporate Music]. [online] Youtube.com. Available at: <https://www.youtube.com/watch?v=KDLPDukQqBI&list=PLLELmi94d_VnAWGGMWFYCtJ4aQFFqmO_8&index=4> [Accessed 19 September 2021].
- Effect Database, S., 2020. Phone Vibrating Sound Effect. [online] Youtube.com. Available at: <https://www.youtube.com/watch?v=eN4gRN-EsJU> [Accessed 19 September 2021].
  