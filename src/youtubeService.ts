import { google } from "googleapis";
const youtube = google.youtube("v3");

const OAuth2 = google.auth.OAuth2;
const clientId =
  "client-id";
const clientSecret = "client-secret";
const redirectURI = "http://localhost:3000/";
const scope = [
  "https://www.googleapis.com/auth/youtube.readonly",
  "https://www.googleapis.com/auth/youtube",
  "https://www.googleapis.com/auth/youtube.force-ssl",
];
const intervalTime = 1000;
let chatMessages = [];
let nextPage: number;
let liveChatId: string;
let interval: any;
const auth = new OAuth2(clientId, clientSecret, redirectURI);

 export async function findActiveChat() {
  const response: any = await youtube.liveBroadcasts.list({
    part: ["snippet"],
  });
  const latestChat = response.data.items[0];
  liveChatId = latestChat.snippet.liveChatId;
  console.log("Chat ID Found: ", liveChatId);
} 

export async function getChatMessages() {
    return youtube.liveChatMessages.list({
        "liveChatId": "id",
        "part": [
          "snippet"
        ]
      })
          .then(function(response) {
                  console.log("Response", response);
                },
                function(err) { console.error("Execute error", err); });
}

export function startVote() {
  interval = setInterval(getChatMessages, intervalTime);
}

export function stopVote() {
  clearInterval(interval);
}
