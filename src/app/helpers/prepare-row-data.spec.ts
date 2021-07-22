import { TestBed } from '@angular/core/testing';
import Helper from '../helpers/prepare-row-data';

describe('Helper', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should return correct data', () => {

  const testData = {
      kind: 'youtube#searchListResponse',
      etag: 'h-FIB_Kl_cpQYQaCvEIRHuEpbuE',
      nextPageToken: 'CDIQAA',
      regionCode: 'BY',
      pageInfo: {
        totalResults: 1000000,
        resultsPerPage: 50
      },
      items: [
        {
          kind: 'youtube#searchResult',
          etag: 'dHlFz5gELOs0_kES3kMjJ4zio6Q',
          id: {
            kind: 'youtube#video',
            videoId: 'A7n6UDZYNEg'
          },
          checkbox: false,
          snippet: {
            publishedAt: '2021-06-18T17:15:00Z',
            channelId: 'UCdntfVwTKE9c3zs0P9VwwxA',
            title: 'SCP-553 a envahie notre Buncker sur Minecraft SCP/FNAF #9',
            description: 'SCP-553 a envahie notre Buncker sur Minecraft SCP/FNAF Retrouves tout les data pack...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/A7n6UDZYNEg/default.jpg',
                width: 120,
                height: 90
              },
              medium: {
                url: 'https://i.ytimg.com/vi/A7n6UDZYNEg/mqdefault.jpg',
                width: 320,
                height: 180
              },
              high: {
                url: 'https://i.ytimg.com/vi/A7n6UDZYNEg/hqdefault.jpg',
                width: 480,
                height: 360
              }
            },
            channelTitle: 'John 2.0',
            liveBroadcastContent: 'none',
            publishTime: '2021-06-18T17:15:00Z',
          }
        },
      ]
    }

    const response = [
      {
        videoId: 'A7n6UDZYNEg',
        checkbox: false,
        thumbnails: 'https://i.ytimg.com/vi/A7n6UDZYNEg/default.jpg',
        publishedAt: '18.06.2021, 20:15',
        title: 'SCP-553 a envahie notre Buncker sur Minecraft SCP/FNAF #9',
        description: 'SCP-553 a envahie notre Buncker sur Minecraft SCP/FNAF Retrouves tout les data pack...',
      }
    ];
    expect(Helper.prepareRowData(testData)).toEqual(response);
  });

});
