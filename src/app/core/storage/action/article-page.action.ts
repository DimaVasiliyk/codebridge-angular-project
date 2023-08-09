export class GetPageWithId {
    static readonly type = '[Get Page With Id]';
    constructor(public id: number) {}
  }

  export class ClearState {
    static readonly type = '[App] Clear State';
  }