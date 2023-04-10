import { getTestBed, TestBed } from '@angular/core/testing';
import { ApiService } from './app.service';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

const DATA = [

  {
    id: 2,
    title: 'Angular',
    description:
      'Cреда проектирования приложений и платформа разработки для создания эффективных и сложных одностраничных приложений',
    url: 'https://angular.io/docs',
  },
 
  {
    id: 4,
    title: 'FLUX',
    description:
      'Архитектура для создания слоев данных в вебприложениях. Этот подход был разработан в Facebook для использования вместе сбиблиотекой для реализации слоя представления приложений – React. Во flux основное внимание уделяется созданию явных и понятных путей обновления данных приложения, что упрощает отслеживание изменений в процессе разработки и облегчает тестирование',
    url: 'https://cyberleninka.ru/article/n/sravnenie-flux-i-redux-arhitektury-klientskih-veb-prilozheniy',
  },
  {
    id: 5,
    title: 'Реактивное программирование',
    description:
      'Программирование с асинхронными потоками данных. Реактивный подход повышает уровень абстракции, что позволяет сконцентрироваться на взаимосвязи событий, которые определяют бизнес-логику, вместо того, чтобы постоянно поддерживать код с большим количеством деталей реализации',
    url: 'https://cyberleninka.ru/article/n/realizatsiya-veb-servisa-s-primeneniem-paradigmy-reaktivnogo-programmirovaniya',
  },
  {
    id: 6,
    title: 'Действие',
    description: 'Хелпер, упрощающий передачу данных диспетчеру',
    url: 'https://cyberleninka.ru/article/n/overview-flux-architecture-on-the-example-of-state-storage-of-java-script-application-redux',
  },
  {
    id: 7,
    title: 'Диспетчер',
    description:
      'Функция, принимающая действия и рассылающая нагрузку зарегистрированным обработчикам',
    url: 'https://cyberleninka.ru/article/n/overview-flux-architecture-on-the-example-of-state-storage-of-java-script-application-redux',
  },
  {
    id: 8,
    title: 'Хранилище данных',
    description:
      'Контейнер для состояния приложения и бизнес-логики в обработчиках, зарегистрированных в диспетчере',
    url: 'https://cyberleninka.ru/article/n/overview-flux-architecture-on-the-example-of-state-storage-of-java-script-application-redux',
  },
  {
    id: 9,
    title: 'Представление',
    description:
      'Компонент, который обычно отвечает за отображение данных, конечная точка потоков данных',
    url: 'https://cyberleninka.ru/article/n/overview-flux-architecture-on-the-example-of-state-storage-of-java-script-application-redux',
  },
  {
    id: 10,
    title: 'Props drilling',
    description:
      'Организация многослойной архитектуры приложения, при которой состояние частей приложения передается вглубь на много слоев, вследствие чего поток данных становится сложнее отслеживать и контролировать',
    url: 'https://elibrary.ru/item.asp?id=44813479',
  },
  {
    id: 11,
    title: 'Компонент',
    description:
      'Строительны1 изолированные блок веб-приложения. В контексте фреймворка Angular обязательной частью компонента является представление. Компоненты  делают приложение безболезненным для модульного тестирования и могут улучшить общую читаемость кода, повышают уровень переиспользуемости частей приложения',
    url: 'https://angular.io/guide/what-is-angular',
  },
  {
    id: 12,
    title: 'Умный компонент',
    description:
      'Компонент, отвечающий за получение и обработку данных, организацию связей между другими компонентами',
    url: 'http://englishonlineclub.com/pdf/Reactive%20Programming%20with%20Angular%20and%20NgRx%20%5BEnglishOnlineClub.com%5D.pdf',
  },
  {
    id: 13,
    title: 'Глупый компонент',
    description:
      'Компонент, не имеющий собственного состояния. Основная цель глупого компонента - отображение данных и уведомление умных компонентов о различных событиях',
    url: 'http://englishonlineclub.com/pdf/Reactive%20Programming%20with%20Angular%20and%20NgRx%20%5BEnglishOnlineClub.com%5D.pdf',
  },
  {
    id: 14,
    title: 'Эффект',
    description:
      'Цепная реакция на действие в менеджере управления состоянием. Выполняет задачи, которые являются синхронными или асинхронными и генерируют новые действия. В контексте фреймворка NgRx эффекты используют потоки для предоставления новых источников действий для уменьшения состояния на основе внешних взаимодействий, таких как сетевые запросы, сообщения веб-сокетов и события, зависящие от времени.',
    url: 'http://englishonlineclub.com/pdf/Reactive%20Programming%20with%20Angular%20and%20NgRx%20%5BEnglishOnlineClub.com%5D.pdf',
  },
  {
    id: 15,
    title: 'RxJS',
    description:
      'Библиотека для создания асинхронных и событийных программ с использованием наблюдаемых последовательностей. Реализует концепцию реактивного программирования',
    url: 'https://rxjs.dev/guide/overview',
  },
  {
    id: 16,
    title: 'Observable',
    description:
      'https://rxjs.dev/guide/glossary-and-semantics, предоставляющий собой шаблон для подключения объекта-наблюдателя в качестве потребителя к производителю через действие подписки',
    url: 'https://rxjs.dev/guide/glossary-and-semantics',
  },
  {
    id: 17,
    title: 'Observer',
    description:
      'Объект, который может иметь некоторые (или все) обработчики для каждого типа событий: next , error и complete . Наличие всех трех типов обработчиков обычно приводит к тому, что его называют «наблюдателем», где, если отсутствует какой-либо из обработчиков уведомлений, его можно назвать «частичным наблюдателем»',
    url: 'https://rxjs.dev/guide/glossary-and-semantics',
  },
  {
    id: 18,
    title: 'Подписка',
    description:
      'Связь, благодаря которой объект-наблюдатель может следить за различными событиями объектов, генерирующих события, и реагировать на них',
    url: 'https://rxjs.dev/guide/glossary-and-semantics',
  },
  {
    id: 19,
    title: 'Subject',
    description:
      'Объект, предоставляющий механизм многоадресной передачи данных или событий нескольким объектам-наблюдателям',
    url: 'https://rxjs.dev/guide/glossary-and-semantics',
  },
  {
    id: 20,
    title: 'Sheduler',
    description:
      'Централизованный диспетчер для управления параллелизмом, позволяющий координировать, когда происходят вычисления',
    url: 'https://rxjs.dev/guide/glossary-and-semantics',
  },
  {
    id: 21,
    title: 'Оператор',
    description:
      'Чистая функция, обеспечивающая функциональный стиль программирования для работы с коллекциями полученных в результате выполнения Observable-значений',
    url: 'https://rxjs.dev/guide/glossary-and-semantics',
  },
  {
    id: 22,
    title: 'Сервис',
    description:
      'Класс с узкой, основными целями которого являются: предоставление данных приложению, представление канала взаимодействия между отдельными компонентами приложения, инкапсуляция бизнес-логики, различных вычислительных задач, которые лучше выносить из кода компонентов',
    url: 'https://angular.io/guide/creating-injectable-service',
  },
  {
    id: 23,
    title: 'MVC',
    description:
      'Архитектурный шаблон, который подразумевает разделение приложения на несколько компонентов, называемых моделью (Model), представлением (View) и контроллером (Controller). Благодаря этому бизнеслогика программной системы отделяется от пользовательского интерфейса, и в нее проще вносить изменения, ее легче масштабировать, тестировать и сопровождать',
    url: 'https://cyberleninka.ru/article/n/issledovanie-i-sravnenie-sovremennyh-realizatsiy-flux-arhitektur-razrabotki-veb-prilozheniy',
  },
  {
    id: 24,
    title: 'Модель',
    description:
      'Слой приложения, предоставляющий данные и методы работы с этими данными, реагирует на запросы, изменяя своё состояние. Не содержит информации, как эти знания можно визуализировать',
    url: 'https://cyberleninka.ru/article/n/issledovanie-i-sravnenie-sovremennyh-realizatsiy-flux-arhitektur-razrabotki-veb-prilozheniy',
  },
  {
    id: 25,
    title: 'Слой представления',
    description: 'Слой приложения, отвечающий за отображение информации',
    url: 'https://cyberleninka.ru/article/n/issledovanie-i-sravnenie-sovremennyh-realizatsiy-flux-arhitektur-razrabotki-veb-prilozheniy',
  },
  {
    id: 26,
    title: 'Контроллер',
    description:
      'Слой приложения, отвечающий за обеспечение связи между представлением и моделью',
    url: 'https://cyberleninka.ru/article/n/issledovanie-i-sravnenie-sovremennyh-realizatsiy-flux-arhitektur-razrabotki-veb-prilozheniy',
  },
  {
    id: 27,
    title: 'NgRx',
    description:
      'Фреймворк для создания реактивных приложений в Angular. NgRx предоставляет библиотеки для: управления глобальным и локальным состоянием, изоляции побочных эффектов для организации более чистой архитектуры компонентов, интеграции с Angular Router',
    url: 'https://ngrx.io/docs',
  },
  {
    id: 28,
    title: 'TypeScript',
    description:
      'Язык, который является типизированным надмножеством JavaScript',
    url: 'https://www.typescriptlang.org',
  },
  {
    id: 29,
    title: 'Фреймворк',
    description:
      'Программная платформа, облегчающая, упрощающая и ускоряющая процесс разработки за счет гибкого управления структурой программного проекта и наличия дополнительных средств для построения интерфейса пользователя',
    url: 'https://cyberleninka.ru/article/n/sovremennye-podhody-k-formirovaniyu-professionalnyh-kompetentsiy-v-oblasti-primeneniya-yazykov-programmirovaniya',
  },
];

describe('ApiService', () => {
  let injector: TestBed;
  let service: ApiService;
  let httpMock: HttpTestingController;
  let apiUrl = '/list'

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });

    injector = getTestBed();
    service = injector.get(ApiService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test getList', () => {
    console.log(service)
    service.getList().subscribe((res) => expect(res).toEqual(DATA));

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(DATA);
  });

  it('test getById', () => {
    const expected = DATA[0];
    const id = expected.id;
    service.getById(id).subscribe((res) => expect(res).toEqual(expected));

    const req = httpMock.expectOne(`${apiUrl}/${id}`);
    expect(req.request.method).toBe('GET');
    req.flush(expected);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
