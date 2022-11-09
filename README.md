# Netflix Clone

## Description

This code is a Netflix clone where users can buy a subscription using Stripe to service, look at trailers and descriptions, cancel/update subscriptions, and save users videos they want in 'My List.'

If anyone want see this code, [please click at this link](https://netflix-clone-bzaptwtwf-juliorojas81871.vercel.app/).

## Technologies & Methods Used

NextJS, TailwindCSS, React, Hooks, Stripe Checkout, Firebase, NextAuth, TypeScript, Recoil, MaterialUI, Heroicons

## Steps to get code to run:
1. Open terminal

2. Type (You can also download the code):
```
git clone https://github.com/juliorojas81871/netflix-clone
```

3. Make sure that you are in the right folder, if not cd to it.

4. Type: 
```
npm i
```
5. Change the .env-example to .env.local and fill each values out

6. Go to https://dashboard.stripe.com/ and create an account

7. In Firebase upgrade to Blaze and install in stripe extensions

8. Got to https://console.firebase.google.com/u/1/project/netflix-clone-9b93f/extensions/instances/firestore-stripe-payments?consoleUI=FIREBASE&tab=usage and complete 'Configure the Stripe customer portal (only used for subscriptions)', 'Configure Stripe webhooks', and 'Set your Cloud Firestore security rules'

9. In security rules you mightg need to add
```
match /myList/{id} {
    allow read, write: if request.auth.uid == uid;
}
```

10. Type: 
```
npm run dev
```
11. Go to browser and type at the address bar: 

```
http://localhost:3000/
```

## Example Pic:
![Netflix Clone Example Pic](https://github.com/juliorojas81871/netflix-clone/blob/main/pics/main.jpg)
