# ChatRoomAPP

## Main goal: 
  Built a chatroom that can send & get message from all on-line user.

## Completed things:
  1. Turn my HTML code to Jade.
  2. CSS.
  3. Enter detected.
  4. Using Socket.io API to send/get message.
  5. Connect to MongoDB to store history messages(use JSON).

## TODO list:
  1. Show on-line Users.
  2. Modify to AngularJS.

###If you want to get whole project, just follow these steps:###

####step1####

  **make sure you have some necessary things installed:**

   1. install [node.js](https://nodejs.org/)
   2. install npm(we need it to download packages)
   3. enter the following command
    ```
    npm init
    ```
   4. enter the following command
    ```
    npm install express
    ```
   5. enter the following command
    ```
    npm install express-generator@4
    ```
   6. download [Socket.io](http://socket.io/) (Please install the latest version)
   7. enter the following command
    ```
    npm install mongodb
    ```
   8. enter the following command
    ```
    npm install mongoose
    ```
   9. You can also goto Socket.io for some example APP [Socket.io APP](http://socket.io/get-started/)

####step2####

  **git clone**

enter the following command
```git
git clone https://github.com/brianhuang1019/ChatRoomAPP.git ChatroomAPP
```
####step3####

  **Open the database**

__You need to create the path /data/db on the root directory and then make /data & /data/db writable__
```
sudo mkdir /data /data/db && sudo chmod 0777 /data /data/db
```

and then enter the following command
```
cd ChatroomAPP && sh db.sh
```

__if you can't open the database, try the commands below: (for Mac OS only, for other OS, plaese see: [mongoDB](https://docs.mongodb.org/manual/installation/))__

```
brew update
```
```
brew install mongodb
```
and create /data & /data/db and set it's priorty bits(if you install mongodb by this way, you don't need to ```
sh db.sh
```)

####step4####

  **Open the server**

enter the following command
```
make run
```

####step5####

  **Open Web page**

Open your browser and goto http://127.0.0.1:3333/
You can see the chatroom

The history message is located at http://127.0.0.1:3333/message

  
###### This project is built by Express + MongoDB at 2015/07/07 by Po-Chih Huang.

