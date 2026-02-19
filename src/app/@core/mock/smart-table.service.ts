import { Injectable } from '@angular/core';
import { SmartTableData } from '../data/smart-table';

const STORAGE_KEY = 'sabr_clientes_data';

const defaultData = [
  {
    id: 1,
    name: 'Mark Otto',
    storeName: 'mdo',
    whatsapp: '11987654321',
    email: 'mdo@gmail.com',
    currentBalance: '28.40',
  },
  {
    id: 2,
    name: 'Jacob Thornton',
    storeName: 'fat',
    whatsapp: '11983451234',
    email: 'fat@yandex.ru',
    currentBalance: '45.12',
  },
  {
    id: 3,
    name: 'Larry Bird',
    storeName: 'twitter',
    whatsapp: '11992345678',
    email: 'twitter@outlook.com',
    currentBalance: '18.90',
  },
  {
    id: 4,
    name: 'John Snow',
    storeName: 'snow',
    whatsapp: '11994561234',
    email: 'snow@gmail.com',
    currentBalance: '20.33',
  },
  {
    id: 5,
    name: 'Jack Sparrow',
    storeName: 'jack',
    whatsapp: '11991239876',
    email: 'jack@yandex.ru',
    currentBalance: '30.05',
  },
  {
    id: 6,
    name: 'Ann Smith',
    storeName: 'ann',
    whatsapp: '11998877665',
    email: 'ann@gmail.com',
    currentBalance: '21.77',
  },
  {
    id: 7,
    name: 'Barbara Black',
    storeName: 'barbara',
    whatsapp: '11990011223',
    email: 'barbara@yandex.ru',
    currentBalance: '43.61',
  },
  {
    id: 8,
    name: 'Sevan Bagrat',
    storeName: 'sevan',
    whatsapp: '11995556677',
    email: 'sevan@outlook.com',
    currentBalance: '13.19',
  },
  {
    id: 9,
    name: 'Ruben Vardan',
    storeName: 'ruben',
    whatsapp: '11996667788',
    email: 'ruben@gmail.com',
    currentBalance: '22.84',
  },
  {
    id: 10,
    name: 'Karen Sevan',
    storeName: 'karen',
    whatsapp: '11997778899',
    email: 'karen@yandex.ru',
    currentBalance: '33.28',
  },
  {
    id: 11,
    name: 'Mark Otto',
    storeName: 'mark',
    whatsapp: '11981112223',
    email: 'mark@gmail.com',
    currentBalance: '38.52',
  },
  {
    id: 12,
    name: 'Jacob Thornton',
    storeName: 'jacob',
    whatsapp: '11982223334',
    email: 'jacob@yandex.ru',
    currentBalance: '48.07',
  },
  {
    id: 13,
    name: 'Haik Hakob',
    storeName: 'haik',
    whatsapp: '11983334445',
    email: 'haik@outlook.com',
    currentBalance: '48.48',
  },
  {
    id: 14,
    name: 'Garegin Jirair',
    storeName: 'garegin',
    whatsapp: '11984445556',
    email: 'garegin@gmail.com',
    currentBalance: '40.11',
  },
  {
    id: 15,
    name: 'Krikor Bedros',
    storeName: 'krikor',
    whatsapp: '11985556667',
    email: 'krikor@yandex.ru',
    currentBalance: '32.95',
  },
  {
    id: 16,
    name: 'Francisca Brady',
    storeName: 'Gibson',
    whatsapp: '11986667778',
    email: 'franciscagibson@comtours.com',
    currentBalance: '11.30',
  },
  {
    id: 17,
    name: 'Tillman Figueroa',
    storeName: 'Snow',
    whatsapp: '11987778889',
    email: 'tillmansnow@comtours.com',
    currentBalance: '34.64',
  },
  {
    id: 18,
    name: 'Jimenez Morris',
    storeName: 'Bryant',
    whatsapp: '11988889990',
    email: 'jimenezbryant@comtours.com',
    currentBalance: '45.18',
  },
  {
    id: 19,
    name: 'Sandoval Jacobson',
    storeName: 'Mcbride',
    whatsapp: '11989990011',
    email: 'sandovalmcbride@comtours.com',
    currentBalance: '32.72',
  },
  {
    id: 20,
    name: 'Griffin Torres',
    storeName: 'Charles',
    whatsapp: '11980001122',
    email: 'griffincharles@comtours.com',
    currentBalance: '19.09',
  },
  {
    id: 21,
    name: 'Cora Parker',
    storeName: 'Caldwell',
    whatsapp: '11981113344',
    email: 'coracaldwell@comtours.com',
    currentBalance: '27.44',
  },
  {
    id: 22,
    name: 'Cindy Bond',
    storeName: 'Velez',
    whatsapp: '11982224455',
    email: 'cindyvelez@comtours.com',
    currentBalance: '24.80',
  },
  {
    id: 23,
    name: 'Frieda Tyson',
    storeName: 'Craig',
    whatsapp: '11983335566',
    email: 'friedacraig@comtours.com',
    currentBalance: '45.25',
  },
  {
    id: 24,
    name: 'Cote Holcomb',
    storeName: 'Rowe',
    whatsapp: '11984446677',
    email: 'coterowe@comtours.com',
    currentBalance: '20.63',
  },
  {
    id: 25,
    name: 'Trujillo Mejia',
    storeName: 'Valenzuela',
    whatsapp: '11985557788',
    email: 'trujillovalenzuela@comtours.com',
    currentBalance: '16.14',
  },
  {
    id: 26,
    name: 'Pruitt Shepard',
    storeName: 'Sloan',
    whatsapp: '11986668899',
    email: 'pruittsloan@comtours.com',
    currentBalance: '44.92',
  },
  {
    id: 27,
    name: 'Sutton Ortega',
    storeName: 'Black',
    whatsapp: '11987779900',
    email: 'suttonblack@comtours.com',
    currentBalance: '42.36',
  },
  {
    id: 28,
    name: 'Marion Heath',
    storeName: 'Espinoza',
    whatsapp: '11988880011',
    email: 'marionespinoza@comtours.com',
    currentBalance: '47.58',
  },
  {
    id: 29,
    name: 'Newman Hicks',
    storeName: 'Keith',
    whatsapp: '11989991122',
    email: 'newmankeith@comtours.com',
    currentBalance: '15.03',
  },
  {
    id: 30,
    name: 'Boyle Larson',
    storeName: 'Summers',
    whatsapp: '11980002233',
    email: 'boylesummers@comtours.com',
    currentBalance: '32.67',
  },
  {
    id: 31,
    name: 'Haynes Vinson',
    storeName: 'Mckenzie',
    whatsapp: '11981114455',
    email: 'haynesmckenzie@comtours.com',
    currentBalance: '15.88',
  },
  {
    id: 32,
    name: 'Miller Acosta',
    storeName: 'Young',
    whatsapp: '11982225566',
    email: 'milleryoung@comtours.com',
    currentBalance: '55.41',
  },
  {
    id: 33,
    name: 'Johnston Brown',
    storeName: 'Knight',
    whatsapp: '11983336677',
    email: 'johnstonknight@comtours.com',
    currentBalance: '29.10',
  },
  {
    id: 34,
    name: 'Lena Pitts',
    storeName: 'Forbes',
    whatsapp: '11984447788',
    email: 'lenaforbes@comtours.com',
    currentBalance: '25.76',
  },
  {
    id: 35,
    name: 'Terrie Kennedy',
    storeName: 'Branch',
    whatsapp: '11985558899',
    email: 'terriebranch@comtours.com',
    currentBalance: '37.22',
  },
  {
    id: 36,
    name: 'Louise Aguirre',
    storeName: 'Kirby',
    whatsapp: '11986669900',
    email: 'louisekirby@comtours.com',
    currentBalance: '44.05',
  },
  {
    id: 37,
    name: 'David Patton',
    storeName: 'Sanders',
    whatsapp: '11987770011',
    email: 'davidsanders@comtours.com',
    currentBalance: '26.93',
  },
  {
    id: 38,
    name: 'Holden Barlow',
    storeName: 'Mckinney',
    whatsapp: '11988881122',
    email: 'holdenmckinney@comtours.com',
    currentBalance: '11.59',
  },
  {
    id: 39,
    name: 'Baker Rivera',
    storeName: 'Montoya',
    whatsapp: '11989992233',
    email: 'bakermontoya@comtours.com',
    currentBalance: '47.08',
  },
  {
    id: 40,
    name: 'Belinda Lloyd',
    storeName: 'Calderon',
    whatsapp: '11980003344',
    email: 'belindacalderon@comtours.com',
    currentBalance: '21.37',
  },
  {
    id: 41,
    name: 'Pearson Patrick',
    storeName: 'Clements',
    whatsapp: '11981115566',
    email: 'pearsonclements@comtours.com',
    currentBalance: '42.70',
  },
  {
    id: 42,
    name: 'Alyce Mckee',
    storeName: 'Daugherty',
    whatsapp: '11982226677',
    email: 'alycedaugherty@comtours.com',
    currentBalance: '55.02',
  },
  {
    id: 43,
    name: 'Valencia Spence',
    storeName: 'Olsen',
    whatsapp: '11983337788',
    email: 'valenciaolsen@comtours.com',
    currentBalance: '20.49',
  },
  {
    id: 44,
    name: 'Leach Holcomb',
    storeName: 'Humphrey',
    whatsapp: '11984448899',
    email: 'leachhumphrey@comtours.com',
    currentBalance: '28.66',
  },
  {
    id: 45,
    name: 'Moss Baxter',
    storeName: 'Fitzpatrick',
    whatsapp: '11985559900',
    email: 'mossfitzpatrick@comtours.com',
    currentBalance: '51.13',
  },
  {
    id: 46,
    name: 'Jeanne Cooke',
    storeName: 'Ward',
    whatsapp: '11986660011',
    email: 'jeanneward@comtours.com',
    currentBalance: '59.84',
  },
  {
    id: 47,
    name: 'Wilma Briggs',
    storeName: 'Kidd',
    whatsapp: '11987771122',
    email: 'wilmakidd@comtours.com',
    currentBalance: '53.21',
  },
  {
    id: 48,
    name: 'Beatrice Perry',
    storeName: 'Gilbert',
    whatsapp: '11988882233',
    email: 'beatricegilbert@comtours.com',
    currentBalance: '39.69',
  },
  {
    id: 49,
    name: 'Whitaker Hyde',
    storeName: 'Mcdonald',
    whatsapp: '11989993344',
    email: 'whitakermcdonald@comtours.com',
    currentBalance: '35.40',
  },
  {
    id: 50,
    name: 'Rebekah Duran',
    storeName: 'Gross',
    whatsapp: '11980004455',
    email: 'rebekahgross@comtours.com',
    currentBalance: '40.17',
  },
  {
    id: 51,
    name: 'Earline Mayer',
    storeName: 'Woodward',
    whatsapp: '11981116677',
    email: 'earlinewoodward@comtours.com',
    currentBalance: '52.91',
  },
  {
    id: 52,
    name: 'Moran Baxter',
    storeName: 'Johns',
    whatsapp: '11982227788',
    email: 'moranjohns@comtours.com',
    currentBalance: '20.08',
  },
  {
    id: 53,
    name: 'Nanette Hubbard',
    storeName: 'Cooke',
    whatsapp: '11983338899',
    email: 'nanettecooke@comtours.com',
    currentBalance: '55.74',
  },
  {
    id: 54,
    name: 'Dalton Walker',
    storeName: 'Hendricks',
    whatsapp: '11984449900',
    email: 'daltonhendricks@comtours.com',
    currentBalance: '25.20',
  },
  {
    id: 55,
    name: 'Bennett Blake',
    storeName: 'Pena',
    whatsapp: '11985550011',
    email: 'bennettpena@comtours.com',
    currentBalance: '13.63',
  },
  {
    id: 56,
    name: 'Kellie Horton',
    storeName: 'Weiss',
    whatsapp: '11986661122',
    email: 'kellieweiss@comtours.com',
    currentBalance: '48.06',
  },
  {
    id: 57,
    name: 'Hobbs Talley',
    storeName: 'Sanford',
    whatsapp: '11987772233',
    email: 'hobbssanford@comtours.com',
    currentBalance: '28.89',
  },
  {
    id: 58,
    name: 'Mcguire Donaldson',
    storeName: 'Roman',
    whatsapp: '11988883344',
    email: 'mcguireroman@comtours.com',
    currentBalance: '38.33',
  },
  {
    id: 59,
    name: 'Rodriquez Saunders',
    storeName: 'Harper',
    whatsapp: '11989994455',
    email: 'rodriquezharper@comtours.com',
    currentBalance: '20.57',
  },
  {
    id: 60,
    name: 'Lou Conner',
    storeName: 'Sanchez',
    whatsapp: '11980005566',
    email: 'lousanchez@comtours.com',
    currentBalance: '16.42',
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
