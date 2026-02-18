import { Injectable } from '@angular/core';
import { SmartTableData } from '../data/smart-table';

const STORAGE_KEY = 'sabr_clientes_data';

const defaultData = [
  {
    id: 1,
    name: 'Mark',
    storeName: 'Otto',
    whatsapp: '@mdo',
    email: 'mdo@gmail.com',
    currentBalance: '28',
  },
  {
    id: 2,
    name: 'Jacob',
    storeName: 'Thornton',
    whatsapp: '@fat',
    email: 'fat@yandex.ru',
    currentBalance: '45',
  },
  {
    id: 3,
    name: 'Larry',
    storeName: 'Bird',
    whatsapp: '@twitter',
    email: 'twitter@outlook.com',
    currentBalance: '18',
  },
  {
    id: 4,
    name: 'John',
    storeName: 'Snow',
    whatsapp: '@snow',
    email: 'snow@gmail.com',
    currentBalance: '20',
  },
  {
    id: 5,
    name: 'Jack',
    storeName: 'Sparrow',
    whatsapp: '@jack',
    email: 'jack@yandex.ru',
    currentBalance: '30',
  },
  {
    id: 6,
    name: 'Ann',
    storeName: 'Smith',
    whatsapp: '@ann',
    email: 'ann@gmail.com',
    currentBalance: '21',
  },
  {
    id: 7,
    name: 'Barbara',
    storeName: 'Black',
    whatsapp: '@barbara',
    email: 'barbara@yandex.ru',
    currentBalance: '43',
  },
  {
    id: 8,
    name: 'Sevan',
    storeName: 'Bagrat',
    whatsapp: '@sevan',
    email: 'sevan@outlook.com',
    currentBalance: '13',
  },
  {
    id: 9,
    name: 'Ruben',
    storeName: 'Vardan',
    whatsapp: '@ruben',
    email: 'ruben@gmail.com',
    currentBalance: '22',
  },
  {
    id: 10,
    name: 'Karen',
    storeName: 'Sevan',
    whatsapp: '@karen',
    email: 'karen@yandex.ru',
    currentBalance: '33',
  },
  {
    id: 11,
    name: 'Mark',
    storeName: 'Otto',
    whatsapp: '@mark',
    email: 'mark@gmail.com',
    currentBalance: '38',
  },
  {
    id: 12,
    name: 'Jacob',
    storeName: 'Thornton',
    whatsapp: '@jacob',
    email: 'jacob@yandex.ru',
    currentBalance: '48',
  },
  {
    id: 13,
    name: 'Haik',
    storeName: 'Hakob',
    whatsapp: '@haik',
    email: 'haik@outlook.com',
    currentBalance: '48',
  },
  {
    id: 14,
    name: 'Garegin',
    storeName: 'Jirair',
    whatsapp: '@garegin',
    email: 'garegin@gmail.com',
    currentBalance: '40',
  },
  {
    id: 15,
    name: 'Krikor',
    storeName: 'Bedros',
    whatsapp: '@krikor',
    email: 'krikor@yandex.ru',
    currentBalance: '32',
  },
  {
    id: 16,
    name: 'Francisca',
    storeName: 'Brady',
    whatsapp: '@Gibson',
    email: 'franciscagibson@comtours.com',
    currentBalance: 11,
  },
  {
    id: 17,
    name: 'Tillman',
    storeName: 'Figueroa',
    whatsapp: '@Snow',
    email: 'tillmansnow@comtours.com',
    currentBalance: 34,
  },
  {
    id: 18,
    name: 'Jimenez',
    storeName: 'Morris',
    whatsapp: '@Bryant',
    email: 'jimenezbryant@comtours.com',
    currentBalance: 45,
  },
  {
    id: 19,
    name: 'Sandoval',
    storeName: 'Jacobson',
    whatsapp: '@Mcbride',
    email: 'sandovalmcbride@comtours.com',
    currentBalance: 32,
  },
  {
    id: 20,
    name: 'Griffin',
    storeName: 'Torres',
    whatsapp: '@Charles',
    email: 'griffincharles@comtours.com',
    currentBalance: 19,
  },
  {
    id: 21,
    name: 'Cora',
    storeName: 'Parker',
    whatsapp: '@Caldwell',
    email: 'coracaldwell@comtours.com',
    currentBalance: 27,
  },
  {
    id: 22,
    name: 'Cindy',
    storeName: 'Bond',
    whatsapp: '@Velez',
    email: 'cindyvelez@comtours.com',
    currentBalance: 24,
  },
  {
    id: 23,
    name: 'Frieda',
    storeName: 'Tyson',
    whatsapp: '@Craig',
    email: 'friedacraig@comtours.com',
    currentBalance: 45,
  },
  {
    id: 24,
    name: 'Cote',
    storeName: 'Holcomb',
    whatsapp: '@Rowe',
    email: 'coterowe@comtours.com',
    currentBalance: 20,
  },
  {
    id: 25,
    name: 'Trujillo',
    storeName: 'Mejia',
    whatsapp: '@Valenzuela',
    email: 'trujillovalenzuela@comtours.com',
    currentBalance: 16,
  },
  {
    id: 26,
    name: 'Pruitt',
    storeName: 'Shepard',
    whatsapp: '@Sloan',
    email: 'pruittsloan@comtours.com',
    currentBalance: 44,
  },
  {
    id: 27,
    name: 'Sutton',
    storeName: 'Ortega',
    whatsapp: '@Black',
    email: 'suttonblack@comtours.com',
    currentBalance: 42,
  },
  {
    id: 28,
    name: 'Marion',
    storeName: 'Heath',
    whatsapp: '@Espinoza',
    email: 'marionespinoza@comtours.com',
    currentBalance: 47,
  },
  {
    id: 29,
    name: 'Newman',
    storeName: 'Hicks',
    whatsapp: '@Keith',
    email: 'newmankeith@comtours.com',
    currentBalance: 15,
  },
  {
    id: 30,
    name: 'Boyle',
    storeName: 'Larson',
    whatsapp: '@Summers',
    email: 'boylesummers@comtours.com',
    currentBalance: 32,
  },
  {
    id: 31,
    name: 'Haynes',
    storeName: 'Vinson',
    whatsapp: '@Mckenzie',
    email: 'haynesmckenzie@comtours.com',
    currentBalance: 15,
  },
  {
    id: 32,
    name: 'Miller',
    storeName: 'Acosta',
    whatsapp: '@Young',
    email: 'milleryoung@comtours.com',
    currentBalance: 55,
  },
  {
    id: 33,
    name: 'Johnston',
    storeName: 'Brown',
    whatsapp: '@Knight',
    email: 'johnstonknight@comtours.com',
    currentBalance: 29,
  },
  {
    id: 34,
    name: 'Lena',
    storeName: 'Pitts',
    whatsapp: '@Forbes',
    email: 'lenaforbes@comtours.com',
    currentBalance: 25,
  },
  {
    id: 35,
    name: 'Terrie',
    storeName: 'Kennedy',
    whatsapp: '@Branch',
    email: 'terriebranch@comtours.com',
    currentBalance: 37,
  },
  {
    id: 36,
    name: 'Louise',
    storeName: 'Aguirre',
    whatsapp: '@Kirby',
    email: 'louisekirby@comtours.com',
    currentBalance: 44,
  },
  {
    id: 37,
    name: 'David',
    storeName: 'Patton',
    whatsapp: '@Sanders',
    email: 'davidsanders@comtours.com',
    currentBalance: 26,
  },
  {
    id: 38,
    name: 'Holden',
    storeName: 'Barlow',
    whatsapp: '@Mckinney',
    email: 'holdenmckinney@comtours.com',
    currentBalance: 11,
  },
  {
    id: 39,
    name: 'Baker',
    storeName: 'Rivera',
    whatsapp: '@Montoya',
    email: 'bakermontoya@comtours.com',
    currentBalance: 47,
  },
  {
    id: 40,
    name: 'Belinda',
    storeName: 'Lloyd',
    whatsapp: '@Calderon',
    email: 'belindacalderon@comtours.com',
    currentBalance: 21,
  },
  {
    id: 41,
    name: 'Pearson',
    storeName: 'Patrick',
    whatsapp: '@Clements',
    email: 'pearsonclements@comtours.com',
    currentBalance: 42,
  },
  {
    id: 42,
    name: 'Alyce',
    storeName: 'Mckee',
    whatsapp: '@Daugherty',
    email: 'alycedaugherty@comtours.com',
    currentBalance: 55,
  },
  {
    id: 43,
    name: 'Valencia',
    storeName: 'Spence',
    whatsapp: '@Olsen',
    email: 'valenciaolsen@comtours.com',
    currentBalance: 20,
  },
  {
    id: 44,
    name: 'Leach',
    storeName: 'Holcomb',
    whatsapp: '@Humphrey',
    email: 'leachhumphrey@comtours.com',
    currentBalance: 28,
  },
  {
    id: 45,
    name: 'Moss',
    storeName: 'Baxter',
    whatsapp: '@Fitzpatrick',
    email: 'mossfitzpatrick@comtours.com',
    currentBalance: 51,
  },
  {
    id: 46,
    name: 'Jeanne',
    storeName: 'Cooke',
    whatsapp: '@Ward',
    email: 'jeanneward@comtours.com',
    currentBalance: 59,
  },
  {
    id: 47,
    name: 'Wilma',
    storeName: 'Briggs',
    whatsapp: '@Kidd',
    email: 'wilmakidd@comtours.com',
    currentBalance: 53,
  },
  {
    id: 48,
    name: 'Beatrice',
    storeName: 'Perry',
    whatsapp: '@Gilbert',
    email: 'beatricegilbert@comtours.com',
    currentBalance: 39,
  },
  {
    id: 49,
    name: 'Whitaker',
    storeName: 'Hyde',
    whatsapp: '@Mcdonald',
    email: 'whitakermcdonald@comtours.com',
    currentBalance: 35,
  },
  {
    id: 50,
    name: 'Rebekah',
    storeName: 'Duran',
    whatsapp: '@Gross',
    email: 'rebekahgross@comtours.com',
    currentBalance: 40,
  },
  {
    id: 51,
    name: 'Earline',
    storeName: 'Mayer',
    whatsapp: '@Woodward',
    email: 'earlinewoodward@comtours.com',
    currentBalance: 52,
  },
  {
    id: 52,
    name: 'Moran',
    storeName: 'Baxter',
    whatsapp: '@Johns',
    email: 'moranjohns@comtours.com',
    currentBalance: 20,
  },
  {
    id: 53,
    name: 'Nanette',
    storeName: 'Hubbard',
    whatsapp: '@Cooke',
    email: 'nanettecooke@comtours.com',
    currentBalance: 55,
  },
  {
    id: 54,
    name: 'Dalton',
    storeName: 'Walker',
    whatsapp: '@Hendricks',
    email: 'daltonhendricks@comtours.com',
    currentBalance: 25,
  },
  {
    id: 55,
    name: 'Bennett',
    storeName: 'Blake',
    whatsapp: '@Pena',
    email: 'bennettpena@comtours.com',
    currentBalance: 13,
  },
  {
    id: 56,
    name: 'Kellie',
    storeName: 'Horton',
    whatsapp: '@Weiss',
    email: 'kellieweiss@comtours.com',
    currentBalance: 48,
  },
  {
    id: 57,
    name: 'Hobbs',
    storeName: 'Talley',
    whatsapp: '@Sanford',
    email: 'hobbssanford@comtours.com',
    currentBalance: 28,
  },
  {
    id: 58,
    name: 'Mcguire',
    storeName: 'Donaldson',
    whatsapp: '@Roman',
    email: 'mcguireroman@comtours.com',
    currentBalance: 38,
  },
  {
    id: 59,
    name: 'Rodriquez',
    storeName: 'Saunders',
    whatsapp: '@Harper',
    email: 'rodriquezharper@comtours.com',
    currentBalance: 20,
  },
  {
    id: 60,
    name: 'Lou',
    storeName: 'Conner',
    whatsapp: '@Sanchez',
    email: 'lousanchez@comtours.com',
    currentBalance: 16,
  },
];

@Injectable()
export class SmartTableService extends SmartTableData {
  data: any[] = [];

  constructor() {
    super();
    this.loadData();
  }

  private loadData(): void {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      try {
        this.data = JSON.parse(storedData);
      } catch (e) {
        console.error('Erro ao carregar dados do localStorage:', e);
        this.data = [...defaultData];
        this.saveData();
      }
    } else {
      this.data = [...defaultData];
      this.saveData();
    }
  }

  private saveData(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
  }

  getData(): any[] {
    return this.data;
  }

  addRecord(record: any): void {
    this.data.push(record);
    this.saveData();
  }

  updateRecord(id: number, updatedRecord: any): void {
    const index = this.data.findIndex((item: any) => item.id === id);
    if (index !== -1) {
      this.data[index] = updatedRecord;
      this.saveData();
    }
  }

  deleteRecord(id: number): void {
    const index = this.data.findIndex((item: any) => item.id === id);
    if (index !== -1) {
      this.data.splice(index, 1);
      this.saveData();
    }
  }
}
