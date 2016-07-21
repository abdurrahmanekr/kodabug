/* Kullanıcıya ait bilgiler */
USER:
	{
		usid : "user_id",
		name : "user_name",
		surname : "surname",
		uspoint : "user_point",
		birth : "birth"
	}

/* Sorulara ait bilgiler */
QUESTION:
	{
		qid : "question_id",
		qusid : "question_user_id",
		qname : "question_name",
		qtype : "question_type",
		qoption : "question_option",
		qtrue : "question_true",
		qfrequency : "question_frequency"
	}

/* Takip bilgileri */
FOLLOW:
	{
		usid : "user_id",
		fusid : "fallow_user_id"
	}

/* Soruların onay bilgileri .. puanını geçenler onaylanmış demektir */
CONFIRMATION:
	{
		qid : "question_id",
		conf : "question_confirm"
	}

/* Görüntülenme tarihi bir kullanıcıya sürekli aynı soru sormayı engellemek için */
PRESENTATION:
	{
		usid : "user_id",
		qid : "question_id",
		prdate : "presentation_date"
	}

/* Sorulara ait tipler (algoritma,binary vb.) */
TYPE:
	{
		qtype : "question_type",
		tpname : "type_name"
	}

/* bir kullanıcının rakip kullanıcıya oyun bilgileri */
GAME:
	{
		gid : "game_id",
		gusid : "game_user_id",
		grivalid : "game_rival_id",
		uspoint : "user_point",
		rivalpoint : "rival_point",
		gmaxpoint : "game_max_point"
	}

/* kazananların bulunduğu tablosu burada aynı userler olabilir  */
WINNER:
	{
		gid : "game_id",
		usid : "user_id",
		windate : "winner_date",
	}