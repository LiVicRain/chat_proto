//요소 선택 및 배열 선택
const chatList = document.getElementById('chat_list');
const chatForm = document.getElementById('chat_form')
let chatArr = [];

//displayChat 함수
function displayChat(){
    chatList.innerHTML = "" //ul안의 html 내용을 모두 없애는것부터 시작한다
    chatArr.forEach((aChat) => {
        const chatBox = document.createElement('li')
        const chatItem = document.createElement('span')
        //삭제버튼은 나중에
        chatBox.className='sendBox';
        chatItem.id='send';
        chatItem.innerText = aChat.chatText
        chatBox.appendChild(chatItem)
        chatList.appendChild(chatBox)

        //상대방 채팅
        const chatBox_rec = document.createElement('li')
        const chatItem_rec = document.createElement('span')
        chatBox_rec.className='receiveBox'
        chatItem_rec.id='recevie';
        chatItem_rec.innerText=`"${chatItem.innerText}" 은(는) 불가능합니다 돌아가라 애송이`;
        chatBox_rec.appendChild(chatItem_rec)
        chatList.appendChild(chatBox_rec)
    })
}

chatForm.addEventListener('submit',function(event){
    event.preventDefault(); //어떤 이벤트를 명시적으로 처리하지 않은 경우, 해당 이벤트에 대한 기본동작을 실행하지 않도록 한다
    const chatAdded = {
        chatText : chatForm.chat.value
    }
    chatForm.chat.value = ""
    chatArr.push(chatAdded)
    displayChat();
})