import type { ScheduleItem, Partner } from './types';

export const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfaFUVAOurdiIW_3_X7Ew5UHeSRx7j10F0EuM9dlS_PJzM44Q/viewform";

export const PROJECT_DATE = "2026年3月14日";

export const SCHEDULE: ScheduleItem[] = [
  { time: "10:00頃", activity: "出発", description: "ご自宅までお迎えにあがります（11時に現地到着できるよう調整します）" },
  { time: "11:00", activity: "美ら海水族館 到着", description: "記念撮影をして、いざ入館！" },
  { time: "12:00", activity: "ランチタイム", description: "家族で楽しいお食事を（飲食代は各自負担）" },
  { time: "13:00", activity: "オキちゃん劇場", description: "迫力のイルカショーを観覧" },
  { time: "15:00", activity: "ジンベエザメ餌やり", description: "巨大水槽の圧巻の景色を楽しもう" },
  { time: "16:00", activity: "美ら海 出発", description: "思い出をたくさん持って帰路へ" },
  { time: "17:00頃", activity: "帰宅", description: "お疲れ様でした！" },
];

export const PARTNERS: Partner[] = [
  { name: "介護タクシー かおり", role: "運行・サポート" },
  { name: "介護タクシー いまここ", role: "運行・サポート" },
  { name: "介護タクシー 寿人", role: "運行・サポート" },
];