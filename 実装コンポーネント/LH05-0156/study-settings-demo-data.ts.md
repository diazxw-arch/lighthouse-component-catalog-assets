import type {LearningSettingsValue} from './LearningSettingsSheet';
import type {GradingChoice} from './AnswerGradingSettings';
export const initialLearningSettings:LearningSettingsValue={shuffle:false,speech:false,direction:{term:true,definition:true},formats:{flashcards:false,multipleChoice:true,written:false}};
export const answerDirectionCopy={heading:'何を答えるか'};
export const questionFormatCopy={heading:'問題の形式'};
export const minimumAnswerCopy={noticeTitle:'この設定は変更できません',noticeLines:['用語と定義のうち、少なくとも','一つを有効にしてください。'],noticeAction:'確認しました'};
export const gradingChoices:readonly GradingChoice[]=[{id:'meaning',label:'意味が合っていれば正解',descriptionLines:['意味が同じ言い換えや、少しの入力ミスも','正解として扱います。']},{id:'similar',label:'ほぼ同じ表現なら正解',descriptionLines:['つづりは合わせます。小さな句読点や','アクセントの違いは許容します。']},{id:'exact',label:'完全に一致したら正解',descriptionLines:['句読点や大文字・小文字などの違いも','含め、登録した答えと照合します。']}];
export const gradingCopy={heading:'答えの判定方法',rewriteDescriptionLines:['間違えた問題では正解を入力してから、','次の問題に進みます。記述問題で使えます。'],emptyLabel:'判定方法はまだありません。'};
