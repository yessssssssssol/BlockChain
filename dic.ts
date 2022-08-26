type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    if (this.words[term] !== undefined) {
      return this.words[term];
    } else {
      return '존재하지 않는 단어입니다.';
    }
  }
  del(term: string) {
    if (this.words[term] !== undefined) {
      delete this.words[term];
    } else {
      console.log('정의되지 않은 단어의 삭제 요청입니다.');
    }
  }
  update(term: string, def: string) {
    if (this.words[term] !== undefined) {
      this.words[term] = def;
    } else {
      console.log('정의되지 않은 단어의 수정 요청입니다.');
    }
  }
}

class Word {
  constructor(public term: string, public def: string) {}
  addDef(def: string) {
    this.def += `, ${def}`;
  }
  updateDef(def: string) {
    this.def = def;
  }
  printDef() {
    console.log(this.def);
  }
}

const kimchi = new Word('kimchi', '한국의 음식');
const dict = new Dict();
