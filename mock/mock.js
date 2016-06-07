module.exports = {
  rules : [
    {
      pattern :/\/api\/getclassfynan.php/,
      respondwith:'./getclassfynan.json'
    },
    {
      pattern :/\/api\/det.php/,
      respondwith:'./det.json'
    }
  ]
}
