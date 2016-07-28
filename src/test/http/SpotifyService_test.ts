import {it, describe, expect, inject, fakeAsync, tick, addProviders} from "@angular/core/testing";
import {MockBackend} from "@angular/http/testing";
import {Http, ConnectionBackend, BaseRequestOptions, Response, ResponseOptions} from "@angular/http";
import {SpotifyService} from "../../app/http/SpotifyService";

describe('SpotifyService', () => {
  beforeEach(() => {
    addProviders([
      BaseRequestOptions,
      MockBackend,
      SpotifyService,
      {
          provide: Http,
          useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
                return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
      }
    ]);
  });

  // sets up an expectation that the correct URL will being requested
  let EXPECTED_NAME = 'felipe'
  function expectURL(backend: MockBackend, url: string) {
    backend.connections.subscribe(c => {
      expect(c.request.url).toBe(url);
      let response = new ResponseOptions({body: `{"name": "${EXPECTED_NAME}"}`});
      c.mockRespond(new Response(response));
    });
  }

  describe('getTrack', () => {
    it('retrieves using the track ID',
      inject([SpotifyService, MockBackend], fakeAsync((svc, backend) => {
        var res;
        expectURL(backend, 'https://api.spotify.com/v1/tracks/TRACK_ID');
        svc.getTrack('TRACK_ID').subscribe((_res) => {
          res = _res;
        });
        tick();
        expect(res.name).toBe(EXPECTED_NAME);
      }))
    );
  });

  describe('getArtist', () => {
    it('retrieves using the artist ID',
      inject([SpotifyService, MockBackend], fakeAsync((svc, backend) => {
        var res;
        expectURL(backend, 'https://api.spotify.com/v1/artists/ARTIST_ID');
        svc.getArtist('ARTIST_ID').subscribe((_res) => {
          res = _res;
        });
        tick();
        expect(res.name).toBe(EXPECTED_NAME);
      }))
    );
  });

  describe('getAlbum', () => {
    it('retrieves using the album ID',
      inject([SpotifyService, MockBackend], fakeAsync((svc, backend) => {
        var res;
        expectURL(backend, 'https://api.spotify.com/v1/albums/ALBUM_ID');
        svc.getAlbum('ALBUM_ID').subscribe((_res) => {
          res = _res;
        });
        tick();
        expect(res.name).toBe(EXPECTED_NAME);
      }))
    );
  });

  describe('searchTrack', () => {
    it('searches type and term',
      inject([SpotifyService, MockBackend], fakeAsync((svc, backend) => {
        var res;
        expectURL(backend, 'https://api.spotify.com/v1/search?q=TERM&type=track');
        svc.searchTrack("TERM").subscribe((_res) => {
          res = _res;
        });
        tick();
        expect(res.name).toBe(EXPECTED_NAME);
      }))
    );
  });
});
