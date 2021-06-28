/* eslint-disable max-lines */
import React, { useState } from 'react';
import BookContext from './BookContext';

function BookProvider({ children }) {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [booksByCategories, setBooksByCategories] = useState({
    fiction: [{
      kind: 'books#volumes',
      totalItems: 78,
      items: [
        {
          kind: 'books#volume',
          id: 'NFnqumxakqoC',
          etag: 'zjmhVLmDWa8',
          selfLink: 'https://www.googleapis.com/books/v1/volumes/NFnqumxakqoC',
          volumeInfo: {
            title: 'Cowboys',
            authors: [
              'Lucille Recht Penner',
            ],
            publisher: 'All Aboard Books (Paperback)',
            publishedDate: '1996',
            description: 'Depicts how cowboys lived in the Old West, describes their methods of raising cattle, and discusses their pastimes',
            industryIdentifiers: [
              {
                type: 'ISBN_10',
                identifier: '044840947X',
              },
              {
                type: 'ISBN_13',
                identifier: '9780448409474',
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 32,
            printType: 'BOOK',
            categories: [
              'History',
            ],
            maturityRating: 'NOT_MATURE',
            allowAnonLogging: false,
            contentVersion: '1.1.2.0.preview.0',
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail: 'http://books.google.com/books/content?id=NFnqumxakqoC&printsec=frontcover&img=1&zoom=5&source=gbs_api',
              thumbnail: 'http://books.google.com/books/content?id=NFnqumxakqoC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            },
            language: 'un',
            previewLink: 'http://books.google.com.br/books?id=NFnqumxakqoC&dq=subject:juvenile&hl=&as_pt=BOOKS&cd=1&source=gbs_api',
            infoLink: 'http://books.google.com.br/books?id=NFnqumxakqoC&dq=subject:juvenile&hl=&as_pt=BOOKS&source=gbs_api',
            canonicalVolumeLink: 'https://books.google.com/books/about/Cowboys.html?hl=&id=NFnqumxakqoC',
          },
          saleInfo: {
            country: 'BR',
            saleability: 'NOT_FOR_SALE',
            isEbook: false,
          },
          accessInfo: {
            country: 'BR',
            viewability: 'NO_PAGES',
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: 'ALLOWED',
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink: 'http://play.google.com/books/reader?id=NFnqumxakqoC&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api',
            accessViewStatus: 'NONE',
            quoteSharingAllowed: false,
          },
        },
        {
          kind: 'books#volume',
          id: '1YSKrgEACAAJ',
          etag: 'pvE5GiOvj5k',
          selfLink: 'https://www.googleapis.com/books/v1/volumes/1YSKrgEACAAJ',
          volumeInfo: {
            title: 'A Collection of Picture Books',
            subtitle: 'A Creative Thesis',
            authors: [
              'ALLISON. JONES',
            ],
            publishedDate: '2003',
            industryIdentifiers: [
              {
                type: 'OTHER',
                identifier: 'OCLC:905909536',
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 54,
            printType: 'BOOK',
            categories: [
              'Juvenile',
            ],
            maturityRating: 'NOT_MATURE',
            allowAnonLogging: false,
            contentVersion: 'preview-1.0.0',
            language: 'un',
            previewLink: 'http://books.google.com.br/books?id=1YSKrgEACAAJ&dq=subject:juvenile&hl=&as_pt=BOOKS&cd=2&source=gbs_api',
            infoLink: 'http://books.google.com.br/books?id=1YSKrgEACAAJ&dq=subject:juvenile&hl=&as_pt=BOOKS&source=gbs_api',
            canonicalVolumeLink: 'https://books.google.com/books/about/A_Collection_of_Picture_Books.html?hl=&id=1YSKrgEACAAJ',
          },
          saleInfo: {
            country: 'BR',
            saleability: 'NOT_FOR_SALE',
            isEbook: false,
          },
          accessInfo: {
            country: 'BR',
            viewability: 'NO_PAGES',
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: 'ALLOWED',
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink: 'http://play.google.com/books/reader?id=1YSKrgEACAAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api',
            accessViewStatus: 'NONE',
            quoteSharingAllowed: false,
          },
        },
        {
          kind: 'books#volume',
          id: 'R-TtRAAACAAJ',
          etag: 'Y0PQonUbwio',
          selfLink: 'https://www.googleapis.com/books/v1/volumes/R-TtRAAACAAJ',
          volumeInfo: {
            title: 'Key to the Treasure',
            authors: [
              'Peggy Parish',
            ],
            publisher: 'Simon & Schuster Books For Young Readers',
            publishedDate: '1967',
            description: 'For use in schools and libraries only. While spending the summer on their grandparents\' farm, Liza, Bill, and Ted unravel a series of coded clues that solve a family mystery.',
            industryIdentifiers: [
              {
                type: 'OTHER',
                identifier: 'OCLC:1372348',
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 154,
            printType: 'BOOK',
            categories: [
              'Juvenile Fiction',
            ],
            averageRating: 2.5,
            ratingsCount: 4,
            maturityRating: 'NOT_MATURE',
            allowAnonLogging: false,
            contentVersion: 'preview-1.0.0',
            language: 'un',
            previewLink: 'http://books.google.com.br/books?id=R-TtRAAACAAJ&dq=subject:juvenile&hl=&as_pt=BOOKS&cd=3&source=gbs_api',
            infoLink: 'http://books.google.com.br/books?id=R-TtRAAACAAJ&dq=subject:juvenile&hl=&as_pt=BOOKS&source=gbs_api',
            canonicalVolumeLink: 'https://books.google.com/books/about/Key_to_the_Treasure.html?hl=&id=R-TtRAAACAAJ',
          },
          saleInfo: {
            country: 'BR',
            saleability: 'NOT_FOR_SALE',
            isEbook: false,
          },
          accessInfo: {
            country: 'BR',
            viewability: 'NO_PAGES',
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: 'ALLOWED',
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink: 'http://play.google.com/books/reader?id=R-TtRAAACAAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api',
            accessViewStatus: 'NONE',
            quoteSharingAllowed: false,
          },
        },
        {
          kind: 'books#volume',
          id: 'MioOAQAAIAAJ',
          etag: 'jOOv/jiNq1Q',
          selfLink: 'https://www.googleapis.com/books/v1/volumes/MioOAQAAIAAJ',
          volumeInfo: {
            title: 'Elsa',
            authors: [
              'Joy Adamson',
            ],
            publishedDate: '1961',
            description: 'A record of an adopted lion cub that was later tained for her return to the wild.',
            industryIdentifiers: [
              {
                type: 'OTHER',
                identifier: 'STANFORD:36105049321453',
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 48,
            printType: 'BOOK',
            categories: [
              'Animal behavior',
            ],
            maturityRating: 'NOT_MATURE',
            allowAnonLogging: false,
            contentVersion: '1.1.2.0.preview.0',
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail: 'http://books.google.com/books/content?id=MioOAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
              thumbnail: 'http://books.google.com/books/content?id=MioOAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            },
            language: 'un',
            previewLink: 'http://books.google.com.br/books?id=MioOAQAAIAAJ&dq=subject:juvenile&hl=&as_pt=BOOKS&cd=4&source=gbs_api',
            infoLink: 'http://books.google.com.br/books?id=MioOAQAAIAAJ&dq=subject:juvenile&hl=&as_pt=BOOKS&source=gbs_api',
            canonicalVolumeLink: 'https://books.google.com/books/about/Elsa.html?hl=&id=MioOAQAAIAAJ',
          },
          saleInfo: {
            country: 'BR',
            saleability: 'NOT_FOR_SALE',
            isEbook: false,
          },
          accessInfo: {
            country: 'BR',
            viewability: 'NO_PAGES',
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: 'ALLOWED',
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink: 'http://play.google.com/books/reader?id=MioOAQAAIAAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api',
            accessViewStatus: 'NONE',
            quoteSharingAllowed: false,
          },
        },
        {
          kind: 'books#volume',
          id: 'Sj5MWqEPsDkC',
          etag: 'nxnIHytMdIo',
          selfLink: 'https://www.googleapis.com/books/v1/volumes/Sj5MWqEPsDkC',
          volumeInfo: {
            title: 'The Silver Door',
            authors: [
              'Holly Lisle',
            ],
            publisher: 'Scholastic Inc.',
            publishedDate: '2010-05-01',
            description: 'When Genna is chosen as the Sunrider of prophecy, her destiny is to unite the magic of the sun and the moon for the good of both Nightlings and humans.',
            industryIdentifiers: [
              {
                type: 'ISBN_13',
                identifier: '9780545000154',
              },
              {
                type: 'ISBN_10',
                identifier: '0545000157',
              },
            ],
            readingModes: {
              text: false,
              image: true,
            },
            pageCount: 366,
            printType: 'BOOK',
            categories: [
              'Juvenile Fiction',
            ],
            averageRating: 3,
            ratingsCount: 5,
            maturityRating: 'NOT_MATURE',
            allowAnonLogging: false,
            contentVersion: 'preview-1.0.0',
            imageLinks: {
              smallThumbnail: 'http://books.google.com/books/content?id=Sj5MWqEPsDkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
              thumbnail: 'http://books.google.com/books/content?id=Sj5MWqEPsDkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            },
            language: 'un',
            previewLink: 'http://books.google.com.br/books?id=Sj5MWqEPsDkC&printsec=frontcover&dq=subject:juvenile&hl=&as_pt=BOOKS&cd=5&source=gbs_api',
            infoLink: 'http://books.google.com.br/books?id=Sj5MWqEPsDkC&dq=subject:juvenile&hl=&as_pt=BOOKS&source=gbs_api',
            canonicalVolumeLink: 'https://books.google.com/books/about/The_Silver_Door.html?hl=&id=Sj5MWqEPsDkC',
          },
          saleInfo: {
            country: 'BR',
            saleability: 'NOT_FOR_SALE',
            isEbook: false,
          },
          accessInfo: {
            country: 'BR',
            viewability: 'PARTIAL',
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: 'ALLOWED_FOR_ACCESSIBILITY',
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: true,
              acsTokenLink: 'http://books.google.com.br/books/download/The_Silver_Door-sample-pdf.acsm?id=Sj5MWqEPsDkC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
            },
            webReaderLink: 'http://play.google.com/books/reader?id=Sj5MWqEPsDkC&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api',
            accessViewStatus: 'SAMPLE',
            quoteSharingAllowed: false,
          },
        },
      ],
    }],
    action: [{
      kind: 'books#volumes',
      totalItems: 78,
      items: [
        {
          kind: 'books#volume',
          id: 'NFnqumxakqoC',
          etag: 'zjmhVLmDWa8',
          selfLink: 'https://www.googleapis.com/books/v1/volumes/NFnqumxakqoC',
          volumeInfo: {
            title: 'Cowboys',
            authors: [
              'Lucille Recht Penner',
            ],
            publisher: 'All Aboard Books (Paperback)',
            publishedDate: '1996',
            description: 'Depicts how cowboys lived in the Old West, describes their methods of raising cattle, and discusses their pastimes',
            industryIdentifiers: [
              {
                type: 'ISBN_10',
                identifier: '044840947X',
              },
              {
                type: 'ISBN_13',
                identifier: '9780448409474',
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 32,
            printType: 'BOOK',
            categories: [
              'History',
            ],
            maturityRating: 'NOT_MATURE',
            allowAnonLogging: false,
            contentVersion: '1.1.2.0.preview.0',
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail: 'http://books.google.com/books/content?id=NFnqumxakqoC&printsec=frontcover&img=1&zoom=5&source=gbs_api',
              thumbnail: 'http://books.google.com/books/content?id=NFnqumxakqoC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            },
            language: 'un',
            previewLink: 'http://books.google.com.br/books?id=NFnqumxakqoC&dq=subject:juvenile&hl=&as_pt=BOOKS&cd=1&source=gbs_api',
            infoLink: 'http://books.google.com.br/books?id=NFnqumxakqoC&dq=subject:juvenile&hl=&as_pt=BOOKS&source=gbs_api',
            canonicalVolumeLink: 'https://books.google.com/books/about/Cowboys.html?hl=&id=NFnqumxakqoC',
          },
          saleInfo: {
            country: 'BR',
            saleability: 'NOT_FOR_SALE',
            isEbook: false,
          },
          accessInfo: {
            country: 'BR',
            viewability: 'NO_PAGES',
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: 'ALLOWED',
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink: 'http://play.google.com/books/reader?id=NFnqumxakqoC&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api',
            accessViewStatus: 'NONE',
            quoteSharingAllowed: false,
          },
        },
        {
          kind: 'books#volume',
          id: '1YSKrgEACAAJ',
          etag: 'pvE5GiOvj5k',
          selfLink: 'https://www.googleapis.com/books/v1/volumes/1YSKrgEACAAJ',
          volumeInfo: {
            title: 'A Collection of Picture Books',
            subtitle: 'A Creative Thesis',
            authors: [
              'ALLISON. JONES',
            ],
            publishedDate: '2003',
            industryIdentifiers: [
              {
                type: 'OTHER',
                identifier: 'OCLC:905909536',
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 54,
            printType: 'BOOK',
            categories: [
              'Juvenile',
            ],
            maturityRating: 'NOT_MATURE',
            allowAnonLogging: false,
            contentVersion: 'preview-1.0.0',
            language: 'un',
            previewLink: 'http://books.google.com.br/books?id=1YSKrgEACAAJ&dq=subject:juvenile&hl=&as_pt=BOOKS&cd=2&source=gbs_api',
            infoLink: 'http://books.google.com.br/books?id=1YSKrgEACAAJ&dq=subject:juvenile&hl=&as_pt=BOOKS&source=gbs_api',
            canonicalVolumeLink: 'https://books.google.com/books/about/A_Collection_of_Picture_Books.html?hl=&id=1YSKrgEACAAJ',
          },
          saleInfo: {
            country: 'BR',
            saleability: 'NOT_FOR_SALE',
            isEbook: false,
          },
          accessInfo: {
            country: 'BR',
            viewability: 'NO_PAGES',
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: 'ALLOWED',
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink: 'http://play.google.com/books/reader?id=1YSKrgEACAAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api',
            accessViewStatus: 'NONE',
            quoteSharingAllowed: false,
          },
        },
        {
          kind: 'books#volume',
          id: 'R-TtRAAACAAJ',
          etag: 'Y0PQonUbwio',
          selfLink: 'https://www.googleapis.com/books/v1/volumes/R-TtRAAACAAJ',
          volumeInfo: {
            title: 'Key to the Treasure',
            authors: [
              'Peggy Parish',
            ],
            publisher: 'Simon & Schuster Books For Young Readers',
            publishedDate: '1967',
            description: 'For use in schools and libraries only. While spending the summer on their grandparents\' farm, Liza, Bill, and Ted unravel a series of coded clues that solve a family mystery.',
            industryIdentifiers: [
              {
                type: 'OTHER',
                identifier: 'OCLC:1372348',
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 154,
            printType: 'BOOK',
            categories: [
              'Juvenile Fiction',
            ],
            averageRating: 2.5,
            ratingsCount: 4,
            maturityRating: 'NOT_MATURE',
            allowAnonLogging: false,
            contentVersion: 'preview-1.0.0',
            language: 'un',
            previewLink: 'http://books.google.com.br/books?id=R-TtRAAACAAJ&dq=subject:juvenile&hl=&as_pt=BOOKS&cd=3&source=gbs_api',
            infoLink: 'http://books.google.com.br/books?id=R-TtRAAACAAJ&dq=subject:juvenile&hl=&as_pt=BOOKS&source=gbs_api',
            canonicalVolumeLink: 'https://books.google.com/books/about/Key_to_the_Treasure.html?hl=&id=R-TtRAAACAAJ',
          },
          saleInfo: {
            country: 'BR',
            saleability: 'NOT_FOR_SALE',
            isEbook: false,
          },
          accessInfo: {
            country: 'BR',
            viewability: 'NO_PAGES',
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: 'ALLOWED',
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink: 'http://play.google.com/books/reader?id=R-TtRAAACAAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api',
            accessViewStatus: 'NONE',
            quoteSharingAllowed: false,
          },
        },
        {
          kind: 'books#volume',
          id: 'MioOAQAAIAAJ',
          etag: 'jOOv/jiNq1Q',
          selfLink: 'https://www.googleapis.com/books/v1/volumes/MioOAQAAIAAJ',
          volumeInfo: {
            title: 'Elsa',
            authors: [
              'Joy Adamson',
            ],
            publishedDate: '1961',
            description: 'A record of an adopted lion cub that was later tained for her return to the wild.',
            industryIdentifiers: [
              {
                type: 'OTHER',
                identifier: 'STANFORD:36105049321453',
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 48,
            printType: 'BOOK',
            categories: [
              'Animal behavior',
            ],
            maturityRating: 'NOT_MATURE',
            allowAnonLogging: false,
            contentVersion: '1.1.2.0.preview.0',
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail: 'http://books.google.com/books/content?id=MioOAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
              thumbnail: 'http://books.google.com/books/content?id=MioOAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            },
            language: 'un',
            previewLink: 'http://books.google.com.br/books?id=MioOAQAAIAAJ&dq=subject:juvenile&hl=&as_pt=BOOKS&cd=4&source=gbs_api',
            infoLink: 'http://books.google.com.br/books?id=MioOAQAAIAAJ&dq=subject:juvenile&hl=&as_pt=BOOKS&source=gbs_api',
            canonicalVolumeLink: 'https://books.google.com/books/about/Elsa.html?hl=&id=MioOAQAAIAAJ',
          },
          saleInfo: {
            country: 'BR',
            saleability: 'NOT_FOR_SALE',
            isEbook: false,
          },
          accessInfo: {
            country: 'BR',
            viewability: 'NO_PAGES',
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: 'ALLOWED',
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink: 'http://play.google.com/books/reader?id=MioOAQAAIAAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api',
            accessViewStatus: 'NONE',
            quoteSharingAllowed: false,
          },
        },
        {
          kind: 'books#volume',
          id: 'Sj5MWqEPsDkC',
          etag: 'nxnIHytMdIo',
          selfLink: 'https://www.googleapis.com/books/v1/volumes/Sj5MWqEPsDkC',
          volumeInfo: {
            title: 'The Silver Door',
            authors: [
              'Holly Lisle',
            ],
            publisher: 'Scholastic Inc.',
            publishedDate: '2010-05-01',
            description: 'When Genna is chosen as the Sunrider of prophecy, her destiny is to unite the magic of the sun and the moon for the good of both Nightlings and humans.',
            industryIdentifiers: [
              {
                type: 'ISBN_13',
                identifier: '9780545000154',
              },
              {
                type: 'ISBN_10',
                identifier: '0545000157',
              },
            ],
            readingModes: {
              text: false,
              image: true,
            },
            pageCount: 366,
            printType: 'BOOK',
            categories: [
              'Juvenile Fiction',
            ],
            averageRating: 3,
            ratingsCount: 5,
            maturityRating: 'NOT_MATURE',
            allowAnonLogging: false,
            contentVersion: 'preview-1.0.0',
            imageLinks: {
              smallThumbnail: 'http://books.google.com/books/content?id=Sj5MWqEPsDkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
              thumbnail: 'http://books.google.com/books/content?id=Sj5MWqEPsDkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            },
            language: 'un',
            previewLink: 'http://books.google.com.br/books?id=Sj5MWqEPsDkC&printsec=frontcover&dq=subject:juvenile&hl=&as_pt=BOOKS&cd=5&source=gbs_api',
            infoLink: 'http://books.google.com.br/books?id=Sj5MWqEPsDkC&dq=subject:juvenile&hl=&as_pt=BOOKS&source=gbs_api',
            canonicalVolumeLink: 'https://books.google.com/books/about/The_Silver_Door.html?hl=&id=Sj5MWqEPsDkC',
          },
          saleInfo: {
            country: 'BR',
            saleability: 'NOT_FOR_SALE',
            isEbook: false,
          },
          accessInfo: {
            country: 'BR',
            viewability: 'PARTIAL',
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: 'ALLOWED_FOR_ACCESSIBILITY',
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: true,
              acsTokenLink: 'http://books.google.com.br/books/download/The_Silver_Door-sample-pdf.acsm?id=Sj5MWqEPsDkC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
            },
            webReaderLink: 'http://play.google.com/books/reader?id=Sj5MWqEPsDkC&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api',
            accessViewStatus: 'SAMPLE',
            quoteSharingAllowed: false,
          },
        },
      ],
    }],
    juvenile: [{
      kind: 'books#volumes',
      totalItems: 78,
      items: [
        {
          kind: 'books#volume',
          id: 'NFnqumxakqoC',
          etag: 'zjmhVLmDWa8',
          selfLink: 'https://www.googleapis.com/books/v1/volumes/NFnqumxakqoC',
          volumeInfo: {
            title: 'Cowboys',
            authors: [
              'Lucille Recht Penner',
            ],
            publisher: 'All Aboard Books (Paperback)',
            publishedDate: '1996',
            description: 'Depicts how cowboys lived in the Old West, describes their methods of raising cattle, and discusses their pastimes',
            industryIdentifiers: [
              {
                type: 'ISBN_10',
                identifier: '044840947X',
              },
              {
                type: 'ISBN_13',
                identifier: '9780448409474',
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 32,
            printType: 'BOOK',
            categories: [
              'History',
            ],
            maturityRating: 'NOT_MATURE',
            allowAnonLogging: false,
            contentVersion: '1.1.2.0.preview.0',
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail: 'http://books.google.com/books/content?id=NFnqumxakqoC&printsec=frontcover&img=1&zoom=5&source=gbs_api',
              thumbnail: 'http://books.google.com/books/content?id=NFnqumxakqoC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            },
            language: 'un',
            previewLink: 'http://books.google.com.br/books?id=NFnqumxakqoC&dq=subject:juvenile&hl=&as_pt=BOOKS&cd=1&source=gbs_api',
            infoLink: 'http://books.google.com.br/books?id=NFnqumxakqoC&dq=subject:juvenile&hl=&as_pt=BOOKS&source=gbs_api',
            canonicalVolumeLink: 'https://books.google.com/books/about/Cowboys.html?hl=&id=NFnqumxakqoC',
          },
          saleInfo: {
            country: 'BR',
            saleability: 'NOT_FOR_SALE',
            isEbook: false,
          },
          accessInfo: {
            country: 'BR',
            viewability: 'NO_PAGES',
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: 'ALLOWED',
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink: 'http://play.google.com/books/reader?id=NFnqumxakqoC&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api',
            accessViewStatus: 'NONE',
            quoteSharingAllowed: false,
          },
        },
        {
          kind: 'books#volume',
          id: '1YSKrgEACAAJ',
          etag: 'pvE5GiOvj5k',
          selfLink: 'https://www.googleapis.com/books/v1/volumes/1YSKrgEACAAJ',
          volumeInfo: {
            title: 'A Collection of Picture Books',
            subtitle: 'A Creative Thesis',
            authors: [
              'ALLISON. JONES',
            ],
            publishedDate: '2003',
            industryIdentifiers: [
              {
                type: 'OTHER',
                identifier: 'OCLC:905909536',
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 54,
            printType: 'BOOK',
            categories: [
              'Juvenile',
            ],
            maturityRating: 'NOT_MATURE',
            allowAnonLogging: false,
            contentVersion: 'preview-1.0.0',
            language: 'un',
            previewLink: 'http://books.google.com.br/books?id=1YSKrgEACAAJ&dq=subject:juvenile&hl=&as_pt=BOOKS&cd=2&source=gbs_api',
            infoLink: 'http://books.google.com.br/books?id=1YSKrgEACAAJ&dq=subject:juvenile&hl=&as_pt=BOOKS&source=gbs_api',
            canonicalVolumeLink: 'https://books.google.com/books/about/A_Collection_of_Picture_Books.html?hl=&id=1YSKrgEACAAJ',
          },
          saleInfo: {
            country: 'BR',
            saleability: 'NOT_FOR_SALE',
            isEbook: false,
          },
          accessInfo: {
            country: 'BR',
            viewability: 'NO_PAGES',
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: 'ALLOWED',
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink: 'http://play.google.com/books/reader?id=1YSKrgEACAAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api',
            accessViewStatus: 'NONE',
            quoteSharingAllowed: false,
          },
        },
        {
          kind: 'books#volume',
          id: 'R-TtRAAACAAJ',
          etag: 'Y0PQonUbwio',
          selfLink: 'https://www.googleapis.com/books/v1/volumes/R-TtRAAACAAJ',
          volumeInfo: {
            title: 'Key to the Treasure',
            authors: [
              'Peggy Parish',
            ],
            publisher: 'Simon & Schuster Books For Young Readers',
            publishedDate: '1967',
            description: 'For use in schools and libraries only. While spending the summer on their grandparents\' farm, Liza, Bill, and Ted unravel a series of coded clues that solve a family mystery.',
            industryIdentifiers: [
              {
                type: 'OTHER',
                identifier: 'OCLC:1372348',
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 154,
            printType: 'BOOK',
            categories: [
              'Juvenile Fiction',
            ],
            averageRating: 2.5,
            ratingsCount: 4,
            maturityRating: 'NOT_MATURE',
            allowAnonLogging: false,
            contentVersion: 'preview-1.0.0',
            language: 'un',
            previewLink: 'http://books.google.com.br/books?id=R-TtRAAACAAJ&dq=subject:juvenile&hl=&as_pt=BOOKS&cd=3&source=gbs_api',
            infoLink: 'http://books.google.com.br/books?id=R-TtRAAACAAJ&dq=subject:juvenile&hl=&as_pt=BOOKS&source=gbs_api',
            canonicalVolumeLink: 'https://books.google.com/books/about/Key_to_the_Treasure.html?hl=&id=R-TtRAAACAAJ',
          },
          saleInfo: {
            country: 'BR',
            saleability: 'NOT_FOR_SALE',
            isEbook: false,
          },
          accessInfo: {
            country: 'BR',
            viewability: 'NO_PAGES',
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: 'ALLOWED',
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink: 'http://play.google.com/books/reader?id=R-TtRAAACAAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api',
            accessViewStatus: 'NONE',
            quoteSharingAllowed: false,
          },
        },
        {
          kind: 'books#volume',
          id: 'MioOAQAAIAAJ',
          etag: 'jOOv/jiNq1Q',
          selfLink: 'https://www.googleapis.com/books/v1/volumes/MioOAQAAIAAJ',
          volumeInfo: {
            title: 'Elsa',
            authors: [
              'Joy Adamson',
            ],
            publishedDate: '1961',
            description: 'A record of an adopted lion cub that was later tained for her return to the wild.',
            industryIdentifiers: [
              {
                type: 'OTHER',
                identifier: 'STANFORD:36105049321453',
              },
            ],
            readingModes: {
              text: false,
              image: false,
            },
            pageCount: 48,
            printType: 'BOOK',
            categories: [
              'Animal behavior',
            ],
            maturityRating: 'NOT_MATURE',
            allowAnonLogging: false,
            contentVersion: '1.1.2.0.preview.0',
            panelizationSummary: {
              containsEpubBubbles: false,
              containsImageBubbles: false,
            },
            imageLinks: {
              smallThumbnail: 'http://books.google.com/books/content?id=MioOAQAAIAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
              thumbnail: 'http://books.google.com/books/content?id=MioOAQAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
            },
            language: 'un',
            previewLink: 'http://books.google.com.br/books?id=MioOAQAAIAAJ&dq=subject:juvenile&hl=&as_pt=BOOKS&cd=4&source=gbs_api',
            infoLink: 'http://books.google.com.br/books?id=MioOAQAAIAAJ&dq=subject:juvenile&hl=&as_pt=BOOKS&source=gbs_api',
            canonicalVolumeLink: 'https://books.google.com/books/about/Elsa.html?hl=&id=MioOAQAAIAAJ',
          },
          saleInfo: {
            country: 'BR',
            saleability: 'NOT_FOR_SALE',
            isEbook: false,
          },
          accessInfo: {
            country: 'BR',
            viewability: 'NO_PAGES',
            embeddable: false,
            publicDomain: false,
            textToSpeechPermission: 'ALLOWED',
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: false,
            },
            webReaderLink: 'http://play.google.com/books/reader?id=MioOAQAAIAAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api',
            accessViewStatus: 'NONE',
            quoteSharingAllowed: false,
          },
        },
        {
          kind: 'books#volume',
          id: 'Sj5MWqEPsDkC',
          etag: 'nxnIHytMdIo',
          selfLink: 'https://www.googleapis.com/books/v1/volumes/Sj5MWqEPsDkC',
          volumeInfo: {
            title: 'The Silver Door',
            authors: [
              'Holly Lisle',
            ],
            publisher: 'Scholastic Inc.',
            publishedDate: '2010-05-01',
            description: 'When Genna is chosen as the Sunrider of prophecy, her destiny is to unite the magic of the sun and the moon for the good of both Nightlings and humans.',
            industryIdentifiers: [
              {
                type: 'ISBN_13',
                identifier: '9780545000154',
              },
              {
                type: 'ISBN_10',
                identifier: '0545000157',
              },
            ],
            readingModes: {
              text: false,
              image: true,
            },
            pageCount: 366,
            printType: 'BOOK',
            categories: [
              'Juvenile Fiction',
            ],
            averageRating: 3,
            ratingsCount: 5,
            maturityRating: 'NOT_MATURE',
            allowAnonLogging: false,
            contentVersion: 'preview-1.0.0',
            imageLinks: {
              smallThumbnail: 'http://books.google.com/books/content?id=Sj5MWqEPsDkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
              thumbnail: 'http://books.google.com/books/content?id=Sj5MWqEPsDkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
            },
            language: 'un',
            previewLink: 'http://books.google.com.br/books?id=Sj5MWqEPsDkC&printsec=frontcover&dq=subject:juvenile&hl=&as_pt=BOOKS&cd=5&source=gbs_api',
            infoLink: 'http://books.google.com.br/books?id=Sj5MWqEPsDkC&dq=subject:juvenile&hl=&as_pt=BOOKS&source=gbs_api',
            canonicalVolumeLink: 'https://books.google.com/books/about/The_Silver_Door.html?hl=&id=Sj5MWqEPsDkC',
          },
          saleInfo: {
            country: 'BR',
            saleability: 'NOT_FOR_SALE',
            isEbook: false,
          },
          accessInfo: {
            country: 'BR',
            viewability: 'PARTIAL',
            embeddable: true,
            publicDomain: false,
            textToSpeechPermission: 'ALLOWED_FOR_ACCESSIBILITY',
            epub: {
              isAvailable: false,
            },
            pdf: {
              isAvailable: true,
              acsTokenLink: 'http://books.google.com.br/books/download/The_Silver_Door-sample-pdf.acsm?id=Sj5MWqEPsDkC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
            },
            webReaderLink: 'http://play.google.com/books/reader?id=Sj5MWqEPsDkC&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api',
            accessViewStatus: 'SAMPLE',
            quoteSharingAllowed: false,
          },
        },
      ],
    }],
  });

  const [filterText, setFilterText] = useState('');

  return (
    <BookContext.Provider
      value={ { filteredBooks, booksByCategories, filterText, setFilterText } }
    >
      {children}
    </BookContext.Provider>

  );
}

export default BookProvider;
