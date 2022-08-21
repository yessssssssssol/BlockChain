type Words = {
  [key: string]: string;
  // Words 타입이 number만을 property로 가지는 오브젝트라는 뜻
};
// let dict: Words = {
//   '1': 'food',
// };
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
    return this.words[term];
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}
const kimchi = new Word('Kimch', '한국의');

const dict = new Dict();

dict.add(kimchi);
dict.def('kimchi');
