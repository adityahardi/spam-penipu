const { default: axios } = require("axios");

const token = "bot6852739481:AAEODLj8ikhz3HHHef7RdTB2nL5VJxrE6xo";
const message = "KERJA%20YANG%20BENER%20LOOOO!!!!";
const chatId = "6723234237";

const url = `https://api.telegram.org/${token}/sendMessage?parse_mode=markdown&chat_id=${chatId}&text=${message}`;

async function sendMessage() {
  try {
    while (true) {
      await axios.get(url).then((response) => {
        if (response.status == 200) {
          console.log("Sending Spam MSG: " + message);
          console.log(response.statusText);
        } else {
          console.log("message failed!");
        }
      });
    }
  } catch (e) {
    sendMessage();
  }
}

sendMessage();
