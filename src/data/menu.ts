export interface MenuItem {
  name: string;
  ingredients: string;
  prices?: {
    small?: string;
    medium?: string;
    large?: string;
  };
  addon?: string;
}

export interface MenuSection {
  title: string;
  icon?: string;
  items: MenuItem[];
  sizes?: string[];
  isPro?: boolean;
}

export const menuData: MenuSection[] = [
  {
    title: "תפריט שייקים",
    sizes: ["קטן 24₪", "גדול 28₪", "32₪"],
    items: [
      {
        name: "קלאסי",
        ingredients: "בננה, תמרים, פקאן"
      },
      {
        name: "חמוץ מתוק",
        ingredients: "תות, בננה, פירות יער"
      },
      {
        name: "חצי משקה",
        ingredients: "בננה, אגוזים, תמרים, טחינה, תמר דבש"
      },
      {
        name: "טוטי-פרויטי",
        ingredients: "תות, מנגו, תפוז, ג'ינג'ר, לימון"
      },
      {
        name: "שייק בריאות גרנולה",
        ingredients: "תערובת גרנולה, בננה, תות, תמר דבש"
      },
      {
        name: "אנרגיה C",
        ingredients: "פסיפלורה, בננה, ג'ינג'ר, תפוז"
      },
      {
        name: "אקזוטי",
        ingredients: "מנגו, קוקוס, תפוז, נענע"
      },
      {
        name: "קקאו אורגני",
        ingredients: "קוקוס, בננה, פקאן, קקאו, תמר דבש"
      },
      {
        name: "צ'יה קסם",
        ingredients: "תות, תמר, אננס, פקאן, צ'יה, חמאת בוטנים"
      },
      {
        name: "טבסקו האבנרו",
        ingredients: "מנגו, אננס, פסיפלורה, תפוז"
      },
      {
        name: "קלאסי Açaí +5",
        ingredients: "אסאי, בננה, תמרים, פירות יער",
        addon: "+5"
      },
      {
        name: "טרופי +5 פעמים",
        ingredients: "פסיפלורה, אסאי, מנגו, קוקוס",
        addon: "+5"
      }
    ]
  },
  {
    title: "תפריט שייקים ירוקים",
    sizes: ["קטן", "גדול"],
    items: [
      {
        name: "שייק אלוף",
        ingredients: "תפוח עץ גדול, מנגו, תפוז, תערובת עלים"
      },
      {
        name: "אנרגיה סולארית",
        ingredients: "מנגו, בננה, פסיפלורה, תערובת עלים"
      },
      {
        name: "אנרגיה",
        ingredients: "בננה, תמרים, אגוזים, גרנולה, תערובת עלים"
      },
      {
        name: "שייק ירוק מרענן",
        ingredients: "נענע, תפוח עץ גדול, מנגו, תפוז, ג'ינג'ר, תערובת עלים"
      },
      {
        name: "שייק ניקוי רעלים עוצמתי",
        ingredients: "תפוח עץ גדול, מלפפון, סלרי, תערובת עלים"
      },
      {
        name: "שייק ניקוי לגוף",
        ingredients: "סלק, לימון, מנגו, פטרוזיליה, תפוז"
      },
      {
        name: "שייק טבעי +5",
        ingredients: "בננה, תמרים, אגוזים, ספירולינה, טחינה, תערובת עלים",
        addon: "+5"
      }
    ]
  },
  {
    title: "PRO שייקים +5",
    sizes: ["M", "L"],
    isPro: true,
    items: [
      {
        name: "צ'יל אנד קפה ☕",
        ingredients: "בננה, אספרסו הבית, פקאנים, חלבון וניל"
      },
      {
        name: "קינמון משוגע",
        ingredients: "תות, קינמון, מנגו, קוקוס, חלבון פיסטוק"
      },
      {
        name: "צ'יל אנד ארוחת",
        ingredients: "חמאת בוטנים, גרנולה, בננה, אגוזים, תמרים"
      },
      {
        name: "בננה פרו",
        ingredients: "קקאו, חלבון וניל, בננה, פקאנים"
      }
    ]
  }
];

export const menuNotes = [
  "מי הגבינה שלנו ללא סוכר וללא גלוטן",
  "בנוסף ספירולינה 5₪",
  "אקסטרה ג'ינג'ר 6₪",
  "בתוספת מי גבינה פרו",
  "בנוסף Açai 5₪"
];

export const baseOptions = "אפשרויות בסיס: חלב, סויה, שקדים, שיבולת שועל, מיץ תפוזים";

export const headerInfo = {
  reputation: "מעל 15 שנות מוניטין",
  logo: "🍃" // Green leaf emoji as placeholder for logo
};
