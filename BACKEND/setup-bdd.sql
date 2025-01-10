CREATE SEQUENCE user_id_seq;
CREATE TABLE IF NOT EXISTS public.Utilisateurs
(
    id integer NOT NULL DEFAULT nextval('user_id_seq'::regclass),
    nom text NOT NULL,
    prenom text NOT NULL,
    login text, 
    pass text,
    CONSTRAINT utilisateurs_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;



INSERT INTO public.Utilisateurs (nom, prenom,login, pass)
VALUES
('BOVARY', 'Emma', 'emma', 'toto');