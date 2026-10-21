import type {LearningRecommendation} from './LearningResultRecommendation';
export const ratioEntryCopy={heading:'図形の数の比率を答えてください'};
export const quantityRatioCopy={heading:'ビーを手伝いましょう',questionLines:['米3に対して水1になる','組合せを作りましょう。'],successLabel:'よくできました！'};
export const dailyChallengeCopy={heading:'朝の読書習慣',subtitle:'5日間のチャレンジ',trophyHeading:'達成のトロフィー',trophyDescription:'読み進めて獲得しましょう',emptyLabel:'チャレンジの本はまだありません。'};
export const learningResultCopy={heading:'今回の結果',recommendationHeading:'次の一歩のために学ぶ',reason:'この結果に合わせた学びのヒント',condition:'この要約を終えると、結果をさらに深く見られます。',nextLabel:'第2段階へ進む',emptyLabel:'おすすめの本はまだありません。'};
export const suppliedLearningResults=[{id:'logic',label:'論理的に考える'},{id:'numbers',label:'数を扱うことが得意'},{id:'patterns',label:'パターンや因果に気づく'},{id:'problems',label:'問題を解く力がある'},{id:'strategy',label:'戦略を立てられる'}];
export const recommendedBook:Omit<LearningRecommendation,'coverSrc'>={id:'money-book',title:'お金との付き合い方を学ぶ',author:'ラミット・セティ',metadata:'15分　・　8つの学び'};
