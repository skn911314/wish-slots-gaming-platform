-- Initial schema proposal only. The current API does not connect to this database.
CREATE TABLE app_users (
  id UUID PRIMARY KEY,
  display_name VARCHAR(80) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE demo_wallets (
  user_id UUID PRIMARY KEY REFERENCES app_users(id),
  credits INTEGER NOT NULL DEFAULT 100 CHECK (credits >= 0),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE game_sessions (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES app_users(id),
  game_key VARCHAR(50) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE game_results (
  id UUID PRIMARY KEY,
  session_id UUID NOT NULL REFERENCES game_sessions(id),
  result_json JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
