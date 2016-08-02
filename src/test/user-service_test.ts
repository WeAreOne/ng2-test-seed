import { inject, async, addProviders, fakeAsync, tick } from '@angular/core/testing';
import { provide } from '@angular/core';
import { UserService } from '../app/user-service';
import { LoginService } from '../app/login-service';



describe('user service', () => {
  beforeEach(() => {
    addProviders([LoginService, UserService]);
  });

  it('should validate pins', inject([UserService], (service) => {
    service.pin = 12345;
    //expect

    service.pin = 0;
    //expect

    service.pin = 9999;
    //expect

    service.pin = -50;
    //expect
 }));

  it('should greet when pin is wrong', async(inject([UserService], (service) => {
    service.pin = 9999;
    service.getGreeting().then((greeting) => {
      //expect
    });
  })), 3000);

  it('should greet when pin is right', async(inject([UserService], (service) => {
    service.pin = 2015;
    service.getGreeting().then((greeting) => {
      //expect
    });
  })), 3000);
});

class MockLoginService extends LoginService {
  login(pin: number) {
    //return ...
  }
}

describe('with mocked login', () => {
  beforeEach(() => {
    addProviders([provide(LoginService, { useClass: MockLoginService }), UserService]);
  });

  it('should greet', async(inject([UserService], (service) => {
    service.getGreeting().then((greeting) => {
      // expect greeting to equal 'Welcome'
    });
  })));
});

describe('with fake async', () => {
  beforeEach(() => {
    addProviders([LoginService, UserService]);
  });

  it('should greet (with fakeAsync)', fakeAsync(inject([UserService], (service) => {
    var greeting;
    service.getGreeting().then((value) => {
      greeting = value;
    });

    tick(2000);
    // expect greeting to equal 'Login failure!'
  })));
});
