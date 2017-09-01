//1
 db.filmes.find({generos:{$in:["Action"]},data_estreia:{$gte:new Date(2000,1,1),$lte:new Date(2003,12,31)}},{_id:0,titulo:1,generos:1,data_estreia:1})
//2
 db.filmes.find({$or:[{generos:{$in:["Horror"]}},{generos:{$in:["Comedy"]}}], duracao:{$lt:120}},{_id:0,titulo:1,generos:1, duracao:1}).pretty()
//3
 db.filmes.find({atores:{$in:["Bruce Willis"]}},{_id:0,titulo:1,atores:1})
//4
 db.filmes.find({arrecadacao:{$gt:1000000}},{}).count()
//5
 db.filmes.find({},{_id:0,arrecadacao:1,diretores:1}).sort({arrecadacao:-1}).limit(10)
//6
 db.filmes.find({diretores:{$in:["Steven Spierlberg"]},data_estreia:{$gte:new Date(1990,1,1),$lte:new Date(1999,12,31)}},{diretores:1,data_estreia:1})
//7
  db.filmes.find({duracao:{$gte:180}},{_id:0,duracao:1,nota:1,titulo:1}).sort({nota:-1}).limit(1)
//8
  db.filmes.distinct("diretores",{data_estreia:{$gte:new Date(2005,1,1),$lte:new Date(2005,12,31)}}).count()
//9
  db.filmes.distinct("atores",{generos:{$in:["Action"],$in:["Comedy"]},data_estreia:{$gte:new Date(2010,1,1),$lte:new Date(2010,12,31)}})
//10
  db.filmes.find({atores:{$in:["Brad Pitt"]}},{_id:0,duracao:1,titulo:1,atores:1}).sort({duracao:-1}).limit(1)