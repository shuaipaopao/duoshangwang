module.exports = {
  rules : [
    {
      pattern :/\/api\/getclassfynan.php/,
      respondwith:'./getclassfynan.json'
    },
    {
      pattern :/\/api\/det.php$/,
      respondwith:'./det.json'
    },
    {
      pattern: /\/api\/det.php\?type\=more$/,
      respondwith: './det-more.json'
    },
    {
      pattern: /\/api\/det.php\?type\=new$/,
      respondwith: './det-new.json'
    }
  ]
}
