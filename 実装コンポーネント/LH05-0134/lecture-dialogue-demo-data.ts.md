import type {CourseLecture} from './CourseLectureLibrary';
import type {ListeningAnswer} from './FinalListeningExercise';
export const lectureLibraryCopy={titleLines:['デザインツールの使い方','機能を基礎から学ぶ講座'],instructor:'講師：ムハンマド',chapterId:'chapter-1',chapterLabel:'第1章・デザインツールの基礎'};
export const courseLectures:readonly CourseLecture[]=[{id:'workspace',number:'1',title:'画面と左側のパネル',metadata:'映像・あと1分52秒'},{id:'tools',number:'2',title:'選択・移動・図形の道具',metadata:'映像・7分50秒'},{id:'pen',number:'3',title:'図形とペンで描く',metadata:'映像・18分22秒'},{id:'text',number:'4',title:'文字と書式を整える',metadata:'映像・4分48秒'}];
export const lectureQuizCopy={brand:'ライトハウス',quizActionLabel:'確認問題を開く',skipLabel:'問題を飛ばして次の講義へ',quizTitle:'デザインツールの確認問題',quizMetadata:'問題・1問'};
export const pronunciationCopy={phrase:'こんにちは。',meaning:'あいさつのことば',completed:true,ownAudioAvailable:true};
export const greetingCopy={title:'初めて会う人にあいさつ',sectionLabel:'第1部・準備の練習',description:'短い練習で、学んだことを思い出しましょう。',questionLabel:'全9問の1問目',firstPartner:{id:'partner-intro',text:'こんにちは。フィリップです。'},nextPartner:{id:'partner-reply',text:'こちらこそ、よろしくお願いします。'},prompt:'「お会いできてうれしいです」と言ってみましょう。',response:{id:'your-response',text:'お会いできてうれしいです。',successful:true}};
export const finalListeningCopy={progress:330/390,intro:'最後の問題に挑戦しましょう',instruction:'聞いて、正しい答えを選んでください',sceneLines:['電車に急ぐ途中で、','ウォーターはマリーに出会いました。'],highlightedWord:'おはよう',phraseRemainder:'、ウォーター！',meaning:'朝のあいさつです。'};
export const listeningAnswers:readonly ListeningAnswer[]=[{id:'morning',label:'おはよう'},{id:'farewell',label:'さようなら',disabled:true}];
