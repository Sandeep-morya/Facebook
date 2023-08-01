# Facebook Clone

<center>
<img align="center" height="100" src="./public/logoname.png" alt="Meetbook" />
</center>
[Live URL](https://sandeep-Meetbook.netlify.app/)

## Overview :

This project is a clone of offical facebook website. I have tried to make it look similar like facebook. Although it does not have all the fetures of facebook, but it consists some major features like create a post, chating, add friend & responsiveness

## Features:

- Video call
- Screen Sharing
- Chat with friends and Strangers
- Real time chat application
- Authentication
- Create a post
- Add Freind

## Tech Stack

- HTML 5
- CSS 3
- JavaScript
- TypeScript
- React
- Vite
- Mantine UI
- Node JS
- Express
- Mongoose
- MongoDB
- Socket.io

`Want to see more projects?`

visit 👇👇

[My Portfolio](https://sandeep-morya.vercel.app)

## Folder Structure

```
Meetbook

📦src
 ┣ 📂api
 ┃ ┗ 📜auth.ts
 ┣ 📂components
 ┃ ┣ 📂Auth
 ┃ ┃ ┣ 📜LoginForm.tsx
 ┃ ┃ ┗ 📜SignUpForm.tsx
 ┃ ┣ 📂Chat
 ┃ ┃ ┣ 📜Chats.tsx
 ┃ ┃ ┣ 📜ChatScreen.tsx
 ┃ ┃ ┗ 📜TimeAgo.tsx
 ┃ ┣ 📂Common
 ┃ ┃ ┣ 📜AvatarButton.tsx
 ┃ ┃ ┣ 📜BirthdayTile.tsx
 ┃ ┃ ┣ 📜ContactTile.tsx
 ┃ ┃ ┣ 📜CreateStoryCard.tsx
 ┃ ┃ ┣ 📜DropZone.tsx
 ┃ ┃ ┣ 📜FixedButton.tsx
 ┃ ┃ ┣ 📜FullLink.tsx
 ┃ ┃ ┣ 📜Havatar.tsx
 ┃ ┃ ┣ 📜Heading.tsx
 ┃ ┃ ┣ 📜LoadingScreen.tsx
 ┃ ┃ ┣ 📜PreviewModal.tsx
 ┃ ┃ ┣ 📜ScrollBtnLeft.tsx
 ┃ ┃ ┣ 📜ScrollBtnRight.tsx
 ┃ ┃ ┗ 📜UploadPostModal.tsx
 ┃ ┣ 📂Footer
 ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┗ 📜Ftext.tsx
 ┃ ┣ 📂Friends
 ┃ ┃ ┣ 📜AllFriends.tsx
 ┃ ┃ ┣ 📜FriendCard.tsx
 ┃ ┃ ┣ 📜FriendRequests.tsx
 ┃ ┃ ┣ 📜FriendsGrid.tsx
 ┃ ┃ ┣ 📜NoFriends.tsx
 ┃ ┃ ┗ 📜Sidebar.tsx
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜AccountModal.tsx
 ┃ ┃ ┣ 📜ActionIcon.tsx
 ┃ ┃ ┣ 📜Logo.tsx
 ┃ ┃ ┣ 📜MenuModal.tsx
 ┃ ┃ ┣ 📜MobileNav.tsx
 ┃ ┃ ┣ 📜Navbar.tsx
 ┃ ┃ ┣ 📜NavButton.tsx
 ┃ ┃ ┣ 📜NotificationModal.tsx
 ┃ ┃ ┣ 📜SearchModal.tsx
 ┃ ┃ ┣ 📜TabIcon.tsx
 ┃ ┃ ┣ 📜TextLogo.tsx
 ┃ ┃ ┗ 📜Ticker.tsx
 ┃ ┣ 📂Main
 ┃ ┃ ┣ 📜Contacts.tsx
 ┃ ┃ ┣ 📜Feeds.tsx
 ┃ ┃ ┣ 📜Post.tsx
 ┃ ┃ ┣ 📜PostButton.tsx
 ┃ ┃ ┣ 📜PostMenu.tsx
 ┃ ┃ ┣ 📜ReelCard.tsx
 ┃ ┃ ┣ 📜Sidebar.tsx
 ┃ ┃ ┣ 📜StoryCard.tsx
 ┃ ┃ ┣ 📜StoryNreelTabs.tsx
 ┃ ┃ ┗ 📜UploadPost.tsx
 ┃ ┣ 📂Misc
 ┃ ┃ ┣ 📜Boot.tsx
 ┃ ┃ ┗ 📜BubbleButton.tsx
 ┃ ┣ 📂Profile
 ┃ ┃ ┣ 📜Photos.tsx
 ┃ ┃ ┣ 📜ProfilePresentation.tsx
 ┃ ┃ ┣ 📜TabPresentation.tsx
 ┃ ┃ ┗ 📜TexTab.tsx
 ┃ ┗ 📜PrivateRoute.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useAddFriend.tsx
 ┃ ┣ 📜useAlert.tsx
 ┃ ┣ 📜useCloudynaryImageUpload.tsx
 ┃ ┣ 📜useDate.tsx
 ┃ ┣ 📜useGetCookie.tsx
 ┃ ┣ 📜useGetRangeArray.tsx
 ┃ ┣ 📜usePasswordValidation.tsx
 ┃ ┣ 📜useRandomName.tsx
 ┃ ┣ 📜useRemoveCookie.tsx
 ┃ ┣ 📜useSearchPosts.tsx
 ┃ ┣ 📜useSearchUser.tsx
 ┃ ┣ 📜useSetCookie.tsx
 ┃ ┣ 📜useTimeAgo.tsx
 ┃ ┗ 📜useUpdateProfile.tsx
 ┣ 📂pages
 ┃ ┣ 📜AuthenticationPage.tsx
 ┃ ┣ 📜ConnectPage.tsx
 ┃ ┣ 📜ErrorPage.tsx
 ┃ ┣ 📜FriendsPage.tsx
 ┃ ┣ 📜Homepage.tsx
 ┃ ┣ 📜index.ts
 ┃ ┗ 📜ProfilePage.tsx
 ┣ 📂Provider
 ┃ ┣ 📜AuthContextProvider.tsx
 ┃ ┣ 📜SocketContextProvider.tsx
 ┃ ┗ 📜UserContextProvider.tsx
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜main.tsx
 ┣ 📜Routes.tsx
 ┣ 📜types.ts
 ┗ 📜vite-env.d.ts
```
