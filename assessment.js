'use strict';

const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivision = document.getElementById('result-area');
const tweetDivision = document.getElementById('tweet-area');

assessmentButton.onclick = function() {
  const userName = userNameInput.value;
if (userName.length === 0) {
return;//名前が空の時は関数の処理を終了する
}
//ここから下は名前が空ではない
  console.log(userName);

  //ただの落書き
  function 関数名() {

  }
  let 変数名 = function () {

  }
  //→無名関数
  // 診断結果エリアの作成
  //作成の前にタグを空にする処理
  resultDivision.innerText = '';
  
  //結果を追加
  //headerDividedの作成
  const headerDivision = document.createElement('div');//h3タグを作る
    headerDivision.innerText = '診断結果';//中身の文章を設定
    headerDivision.setAttribute('class', 'card-header');

    //bodyDividedの作成
    const bodyDivision = document.createElement('div');
    bodyDivision.setAttribute('class','card-body');

    const paragraph = document.createElement('p');
    paragraph.setAttribute('class', 'card-text');
    const result = assessment(userName);//診断結果を取得
    paragraph.innerText = result;
    bodyDivision.appendChild(paragraph);

  //divの子要素として追加

  //resultDivided に　card　スタイルを追加
  resultDivision.setAttribute('class', 'card');

  resultDivision.appendChild(headerDivision);
  resultDivision.appendChild(bodyDivision);

  // ツイートエリアの作成
  tweetDivision.innerText = '';
  const anchor = document.createElement('a');
  const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=あなたのいいところ&ref_src=twsrc%5Etfw'
  'https://twitter.com/intent/tweet?button_hashtag=' +
  encodeURIComponent('あなたのいいところ') +
  '&ref_src=twsrc%5Etfw';

  anchor.setAttribute('href', hrefValue);
  anchor.setAttribute('class', 'twitter-hashtag-button');
  anchor.setAttribute('data-text',result);
  anchor.innerText = 'Tweet #あなたのいいところ';

  tweetDivision.appendChild(anchor);

  const script = document.createElement('script');
  script.setAttribute('src','https://platform.twitter.com/widgets.js');
  tweetDivision.appendChild(script);
}


const answers = [
 '###userName###のいいところは声です。###userName###の特徴的な声は皆を惹きつけ、心に残ります。',
 '###userName###のいいところはまなざしです。###userName###に見つめられた人は、気になって仕方がないでしょう。',
 '###userName###のいいところは情熱です。###userName###の情熱に周りの人は感化されます。',
 '###userName###のいいところは厳しさです。###userName###の厳しさがものごとをいつも成功に導きます。',
 '###userName###のいいところは知識です。博識な###userName###を多くの人が頼りにしています。',
 '###userName###のいいところはユニークさです。###userName###だけのその特徴が皆を楽しくさせます。',
 '###userName###のいいところは用心深さです。###userName###の洞察に、多くの人が助けられます。',
 '###userName###のいいところは見た目です。内側から溢れ出る###userName###の良さに皆が気を惹かれます。',
 '###userName###のいいところは決断力です。###userName###がする決断にいつも助けられる人がいます。',
 '###userName###のいいところは思いやりです。###userName###に気をかけてもらった多くの人が感謝しています。',
 '###userName###のいいところは感受性です。###userName###が感じたことに皆が共感し、わかりあうことができます。',
 '###userName###のいいところは節度です。強引すぎない###userName###の考えに皆が感謝しています。',
 '###userName###のいいところは好奇心です。新しいことに向かっていく###userName###の心構えが多くの人に魅力的に映ります。',
 '###userName###のいいところは気配りです。###userName###の配慮が多くの人を救っています。',
 '###userName###のいいところはその全てです。ありのままの###userName###自身がいいところなのです。',
 '###userName###のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる###userName###が皆から評価されています。',
];

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {stiring} userName ユーザの名前
 * @return {string} 診断結果
 */
function assessment (userName) {
//全文字のコード番号を樹徳してそれを足し合わせる
  let sumOfCharCode = 0;
  for (let i = 0; i < userName.length; i++) {
   sumOfCharCode = sumOfCharCode + userName.charCodeAt(i); 
  }

  //文字コード番号の合計を回答の数で割って添え字の数字を求める
  const index = sumOfCharCode % answers.length;//0~ answers, length - 1 の間の数値
  let result = answers[index];
result = result.replaceAll('###userName###', userName);
return result;
}

function test() {
  console.log('診断結果の文章テスト');

console.log('太郎')
console.assert(
  assessment('太郎') === 
  '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
  '診断結果の文章の特定の部分を名前に置き換える処理が正しくありません。'
);

console.assert(
  assessment('太郎') === assessment('太郎'),
  '同じ名前で診断をした場合に同じ結果になっていません。'
)
console.assert(
  assessment('次郎') === assessment('次郎'),
  '同じ名前で診断をした場合に同じ結果になっていません。'
)
console.assert(
  assessment('花子') === assessment('花子'),
  '同じ名前で診断をした場合に同じ結果になっていません。'
)



console.log('診断結果の文章テスト終了');
}

test();



userNameInput.onkeydown = event => {
if (event.key === 'Enter') {
  assessmentButton.onclick();//ボタンクリックしたときと同じ関数を実行
}
}
