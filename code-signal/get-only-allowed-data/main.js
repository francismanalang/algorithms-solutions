const excludeList = ['foo', 'bar', 'baz'];
const data = ['foo', 'qux', 'hex', 'next', 'text'];

function getOnlyAllowedData(excludeList, data) {
  const dataObject = {};

  for (let i = 0; i < data.length; i++) {
    const word = data[i];
    if (!dataObject[word]) {
      dataObject[word] = 1;
    }
  }

  for (let i = 0; i < excludeList.length; i++) {
    const excludedWord = excludeList[i];
    if (dataObject[excludedWord]) {
      delete dataObject[excludedWord];
    }
  }

  return Object.keys(dataObject);
}

getOnlyAllowedData(excludeList, data);
