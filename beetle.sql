--
-- PostgreSQL database dump
--

-- Dumped from database version 10.4
-- Dumped by pg_dump version 10.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: devices; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.devices (
    device_id bigint NOT NULL,
    user_id bigint NOT NULL,
    uuid text NOT NULL,
    device_name text
);


ALTER TABLE public.devices OWNER TO postgres;

--
-- Name: devices_device_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.devices_device_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.devices_device_id_seq OWNER TO postgres;

--
-- Name: devices_device_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.devices_device_id_seq OWNED BY public.devices.device_id;


--
-- Name: devices_info; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.devices_info (
    uuid text NOT NULL,
    password text NOT NULL,
    tel text NOT NULL
);


ALTER TABLE public.devices_info OWNER TO postgres;

--
-- Name: devices_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.devices_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.devices_user_id_seq OWNER TO postgres;

--
-- Name: devices_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.devices_user_id_seq OWNED BY public.devices.user_id;


--
-- Name: user_account; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_account (
    username text,
    password text,
    company_name text,
    tel text,
    email text,
    user_id bigint NOT NULL
);


ALTER TABLE public.user_account OWNER TO postgres;

--
-- Name: user_account_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_account_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_account_user_id_seq OWNER TO postgres;

--
-- Name: user_account_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_account_user_id_seq OWNED BY public.user_account.user_id;


--
-- Name: devices device_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.devices ALTER COLUMN device_id SET DEFAULT nextval('public.devices_device_id_seq'::regclass);


--
-- Name: devices user_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.devices ALTER COLUMN user_id SET DEFAULT nextval('public.devices_user_id_seq'::regclass);


--
-- Name: user_account user_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_account ALTER COLUMN user_id SET DEFAULT nextval('public.user_account_user_id_seq'::regclass);


--
-- Name: devices device_id; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.devices
    ADD CONSTRAINT device_id PRIMARY KEY (device_id);


--
-- Name: user_account user_account_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_account
    ADD CONSTRAINT user_account_pkey PRIMARY KEY (user_id);


--
-- Name: devices user_id; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.devices
    ADD CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES public.user_account(user_id) ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

