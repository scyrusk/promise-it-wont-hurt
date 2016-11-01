first().then((res) => {
  return second(res)
}).then(console.log);