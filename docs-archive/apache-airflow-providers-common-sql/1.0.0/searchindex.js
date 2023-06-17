Search.setIndex({"docnames": ["_api/airflow/providers/common/sql/hooks/index", "_api/airflow/providers/common/sql/hooks/sql/index", "_api/airflow/providers/common/sql/index", "_api/airflow/providers/common/sql/operators/index", "_api/airflow/providers/common/sql/operators/sql/index", "_api/airflow/providers/common/sql/sensors/index", "_api/airflow/providers/common/sql/sensors/sql/index", "_api/tests/system/providers/common/sql/example_sql_column_table_check/index", "_api/tests/system/providers/common/sql/index", "commits", "connections", "index", "installing-providers-from-sources", "operators"], "filenames": ["_api/airflow/providers/common/sql/hooks/index.rst", "_api/airflow/providers/common/sql/hooks/sql/index.rst", "_api/airflow/providers/common/sql/index.rst", "_api/airflow/providers/common/sql/operators/index.rst", "_api/airflow/providers/common/sql/operators/sql/index.rst", "_api/airflow/providers/common/sql/sensors/index.rst", "_api/airflow/providers/common/sql/sensors/sql/index.rst", "_api/tests/system/providers/common/sql/example_sql_column_table_check/index.rst", "_api/tests/system/providers/common/sql/index.rst", "commits.rst", "connections.rst", "index.rst", "installing-providers-from-sources.rst", "operators.rst"], "titles": ["<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.common.sql.hooks</span></code>", "<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.common.sql.hooks.sql</span></code>", "<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.common.sql</span></code>", "<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.common.sql.operators</span></code>", "<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.common.sql.operators.sql</span></code>", "<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.common.sql.sensors</span></code>", "<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">airflow.providers.common.sql.sensors.sql</span></code>", "<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">tests.system.providers.common.sql.example_sql_column_table_check</span></code>", "<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">tests.system.providers.common.sql</span></code>", "Package apache-airflow-providers-common-sql", "Connecting to a SQL DB", "<code class=\"docutils literal notranslate\"><span class=\"pre\">apache-airflow-providers-common-sql</span></code>", "Installing from sources", "SQL Operators"], "terms": {"1": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 13], "0": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 13], "2": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "4": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "dev0": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "thi": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "an": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "experiment": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "featur": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], "connectorprotocol": [1, 11], "sourc": [1, 4, 6, 7, 11, 13], "base": [1, 4, 6], "typing_extens": 1, "protocol": 1, "A": [1, 6], "where": [1, 13], "you": [1, 11, 12], "can": [1, 4, 6, 10, 11, 12, 13], "connect": [1, 4, 6, 11, 13], "databas": [1, 4, 10, 11, 13], "self": [1, 4, 6, 12], "host": 1, "port": 1, "usernam": 1, "schema": 1, "paramet": [1, 4, 6, 10], "str": [1, 4, 6], "The": [1, 6, 10, 12, 13], "int": [1, 13], "us": [1, 4, 12, 13], "authent": 1, "return": [1, 4, 6], "author": 1, "object": 1, "type": 1, "ani": [1, 4, 10, 12, 13], "dbapihook": [1, 11], "arg": [1, 10], "none": [1, 4, 6, 12], "log_sql": 1, "true": [1, 4], "kwarg": [1, 4, 6], "basehook": 1, "abstract": 1, "option": [1, 4, 6], "db": 1, "overrid": [1, 6], "specifi": [1, 4, 13], "make": 1, "sure": 1, "chang": [1, 9], "valu": [1, 4, 6], "constructor": [1, 6], "deriv": [1, 4, 6], "should": [1, 4, 6, 12], "done": 1, "befor": [1, 6], "call": [1, 6], "__init__": 1, "bool": 1, "whether": 1, "log": 1, "queri": [1, 6, 13], "when": [1, 4, 13], "s": [1, 12, 13], "execut": [1, 4], "default": 1, "conn_name_attr": 1, "default_conn_nam": 1, "default_conn_id": 1, "supports_autocommit": 1, "fals": [1, 4, 6], "connector": 1, "get_conn": 1, "get_uri": 1, "extract": 1, "uri": 1, "from": [1, 4, 11], "get_sqlalchemy_engin": 1, "engine_kwarg": 1, "get": [1, 12], "sqlalchemy_engin": 1, "create_engin": 1, "creat": [1, 4, 12], "engin": 1, "get_pandas_df": 1, "panda": 1, "datafram": 1, "statement": [1, 6, 13], "list": [1, 9, 11], "render": [1, 4, 6], "pass": [1, 6, 10], "io": 1, "read_sql": 1, "method": [1, 4], "get_pandas_df_by_chunk": 1, "chunksiz": 1, "gener": 1, "number": [1, 13], "row": [1, 6, 13], "includ": [1, 9, 13], "each": [1, 4, 13], "chunk": 1, "get_record": 1, "set": [1, 13], "record": 1, "get_first": 1, "first": [1, 6, 13], "result": [1, 4, 13], "run": [1, 4, 6, 12, 13], "autocommit": 1, "handler": 1, "command": 1, "them": 1, "sequenti": 1, "what": 1, "which": [1, 4, 6, 13], "wa": 1, "set_autocommit": 1, "conn": 1, "flag": 1, "get_autocommit": 1, "doe": 1, "support": [1, 11], "get_cursor": 1, "cursor": 1, "insert_row": 1, "tabl": [1, 4], "target_field": 1, "commit_everi": 1, "1000": [1, 4, 13], "replac": 1, "wai": 1, "insert": 1, "tupl": 1, "new": 1, "transact": 1, "everi": 1, "name": [1, 4, 13], "target": 1, "column": [1, 4], "fill": 1, "maximum": [1, 13], "one": [1, 4, 6, 12], "all": [1, 9, 11], "instead": 1, "bulk_dump": 1, "tmp_file": 1, "dump": 1, "tab": 1, "delimit": 1, "file": [1, 12], "path": 1, "bulk_load": 1, "load": 1, "test_connect": 1, "test": [1, 13], "specif": 1, "hook": [2, 6, 10], "oper": [2, 10, 11], "sensor": 2, "parse_boolean": [4, 13], "val": 4, "try": [4, 6], "pars": 4, "string": [4, 6, 13], "boolean": [4, 6, 13], "rais": [4, 6], "valueerror": 4, "input": 4, "valid": [4, 12, 13], "like": [4, 10, 13], "sqlcolumncheckoper": [4, 11, 13], "column_map": [4, 13], "conn_id": [4, 6], "basesqloper": 4, "perform": [4, 13], "more": [4, 10], "templat": [4, 13], "check": [4, 12], "column_check": [4, 7, 13], "dictionari": [4, 13], "ar": [4, 6, 11, 12, 13], "per": 4, "basi": 4, "take": [4, 6], "follow": [4, 12], "equal_to": [4, 13], "exact": 4, "equal": 4, "cannot": 4, "other": [4, 10, 13], "comparison": 4, "greater_than": [4, 13], "strictli": 4, "greater": 4, "than": 4, "less_than": [4, 13], "less": 4, "geq_to": [4, 13], "leq_to": [4, 13], "toler": [4, 13], "percentag": [4, 13], "mai": [4, 13], "off": 4, "expect": 4, "dict": 4, "associ": 4, "e": 4, "g": 4, "col_nam": [4, 13], "null_check": [4, 13], "min": [4, 13], "5": [4, 13], "10": [4, 13], "max": [4, 13], "01": [4, 13], "id": [4, 12, 13], "overwrit": 4, "defin": [4, 6], "For": [4, 9, 10, 12], "inform": [4, 9], "how": [4, 12, 13], "look": [4, 13], "guid": [4, 12], "context": [4, 6], "main": [4, 12], "same": [4, 13], "jinja": 4, "refer": 4, "get_template_context": 4, "sqltablecheckoper": [4, 11, 13], "written": 4, "row_count_check": [4, 13], "check_stat": [4, 13], "count": [4, 13], "column_sum_check": [4, 13], "col_a": [4, 13], "col_b": [4, 13], "col_c": [4, 13], "sql_check_templ": 4, "case": [4, 6], "THEN": 4, "els": 4, "end": 4, "AS": 4, "check_nam": 4, "sql_min_templ": 4, "sqlsensor": [6, 11], "success": [6, 13], "failur": 6, "fail_on_empti": 6, "hook_param": 6, "basesensoroper": 6, "repeatedli": 6, "until": 6, "criteria": 6, "met": 6, "It": [6, 12], "keep": 6, "cell": 6, "callabl": 6, "argument": [6, 13], "If": [6, 12], "retri": 6, "airflowexcept": 6, "evalu": 6, "also": [6, 12], "fail": 6, "have": 6, "been": 6, "against": [6, 13], "To": [6, 12], "need": 6, "least": 6, "contain": [6, 12], "non": 6, "zero": 6, "empti": 6, "first_cel": 6, "onli": 6, "explicitli": 6, "extra": 6, "config": 6, "param": 6, "underli": 6, "match": [6, 12], "desir": 6, "template_field": 6, "sequenc": 6, "template_ext": 6, "hql": 6, "ui_color": 6, "7c7287": 6, "poke": 6, "function": 6, "while": 6, "airflow_db_metadata_t": [7, 13], "ab_rol": 7, "connection_arg": 7, "test_run": 7, "example_sql_column_table_check": [8, 13], "detail": [9, 11, 12], "commit": 9, "version": [9, 11, 12], "high": 9, "level": [9, 13], "changelog": 9, "see": [9, 11], "latest": 9, "2022": 9, "07": 9, "subject": 9, "46bbfdade0": 9, "move": [9, 11], "class": [9, 11], "24836": 9, "provid": [10, 12, 13], "packag": 10, "allow": 10, "access": 10, "variou": [10, 13], "dbapi": 10, "directli": 10, "simpli": 10, "suffici": 10, "complic": 10, "addit": 10, "kei": [10, 12, 13], "word": 10, "under": [10, 13], "do": [10, 12], "python": [11, 12], "api": 11, "exampl": [11, 12, 13], "dag": 11, "pypi": 11, "repositori": 11, "releas": 11, "top": [11, 12], "exist": 11, "requir": 11, "below": [11, 12, 13], "minimum": [11, 13], "via": [11, 12], "pip": [11, 12], "initi": 11, "add": 11, "page": 12, "describ": [12, 13], "download": 12, "apach": 12, "airflow": [12, 13], "common": [12, 13], "sql": 12, "offici": 12, "most": 12, "choos": 12, "differ": 12, "select": 12, "drop": 12, "down": 12, "left": 12, "sdist": 12, "whl": 12, "want": 12, "origin": 12, "checksum": 12, "signatur": 12, "avail": 12, "softwar": 12, "foundat": 12, "asc": 12, "sha512": 12, "those": 12, "code": 12, "link": 12, "abov": 12, "build": [12, 13], "pgp": 12, "essenti": 12, "sha": 12, "gpg": 12, "pleas": 12, "well": [12, 13], "relev": 12, "distribut": 12, "recommend": 12, "directori": 12, "mirror": 12, "i": 12, "pgpk": 12, "ka": 12, "binari": 12, "pgpv": 12, "tar": 12, "gz": 12, "made": 12, "sat": 12, "11": 12, "sep": 12, "12": 12, "49": 12, "54": 12, "2021": 12, "bst": 12, "rsa": 12, "cde15c6e4d3a8ec4ecf4ba4b6674e08ad7de406f": 12, "issuer": 12, "kaxilnaik": 12, "org": 12, "good": 12, "kaxil": 12, "naik": 12, "unknown": 12, "aka": 12, "gmail": 12, "com": 12, "warn": 12, "user": 12, "certifi": 12, "trust": 12, "There": 12, "indic": 12, "belong": 12, "owner": 12, "primari": 12, "fingerprint": 12, "cde1": 12, "5c6e": 12, "4d3a": 12, "8ec4": 12, "ecf4": 12, "ba4b": 12, "6674": 12, "e08a": 12, "d7de": 12, "406f": 12, "correct": 12, "worri": 12, "about": 12, "certif": 12, "manag": 12, "sign": 12, "why": 12, "By": 12, "import": 12, "server": 12, "previou": 12, "step": 12, "know": 12, "alreadi": 12, "sum": 12, "shasum": 12, "512": 12, "diff": 12, "local": 12, "script": 12, "bin": 12, "bash": 12, "package_vers": 12, "package_nam": 12, "provider_download_dir": 12, "mktemp": 12, "d": 12, "dep": 12, "dest": 12, "curl": 12, "http": 12, "apache_airflow_providers_common_sql": 12, "py3": 12, "l": 12, "o": 12, "echo": 12, "ls": 12, "la": 12, "onc": 12, "instruct": 12, "chapter": 12, "remov": 12, "temporari": 12, "folder": 12, "These": 13, "data": 13, "qualiti": 13, "given": 13, "As": 13, "relationship": 13, "between": 13, "must": 13, "suppli": 13, "map": 13, "three": 13, "nest": 13, "entri": 13, "its": 13, "null": 13, "distinct_check": 13, "distinct": 13, "unique_check": 13, "either": 13, "condit": 13, "compat": 13, "both": 13, "lower": 13, "upper": 13, "bound": 13, "out": 13, "still": 13, "consid": 13, "demonstr": 13, "instanti": 13, "task": 13, "system": 13, "py": 13, "task_id": 13, "two": 13, "referenc": 13, "resolv": 13}, "objects": {"airflow.providers.common": [[2, 0, 0, "-", "sql"]], "airflow.providers.common.sql": [[0, 0, 0, "-", "hooks"], [3, 0, 0, "-", "operators"], [5, 0, 0, "-", "sensors"]], "airflow.providers.common.sql.hooks": [[1, 0, 0, "-", "sql"]], "airflow.providers.common.sql.hooks.sql": [[1, 1, 1, "", "ConnectorProtocol"], [1, 1, 1, "", "DbApiHook"]], "airflow.providers.common.sql.hooks.sql.ConnectorProtocol": [[1, 2, 1, "", "connect"]], "airflow.providers.common.sql.hooks.sql.DbApiHook": [[1, 2, 1, "", "bulk_dump"], [1, 2, 1, "", "bulk_load"], [1, 3, 1, "", "conn_name_attr"], [1, 3, 1, "", "connector"], [1, 3, 1, "", "default_conn_name"], [1, 2, 1, "", "get_autocommit"], [1, 2, 1, "", "get_conn"], [1, 2, 1, "", "get_cursor"], [1, 2, 1, "", "get_first"], [1, 2, 1, "", "get_pandas_df"], [1, 2, 1, "", "get_pandas_df_by_chunks"], [1, 2, 1, "", "get_records"], [1, 2, 1, "", "get_sqlalchemy_engine"], [1, 2, 1, "", "get_uri"], [1, 2, 1, "", "insert_rows"], [1, 2, 1, "", "run"], [1, 2, 1, "", "set_autocommit"], [1, 3, 1, "", "supports_autocommit"], [1, 2, 1, "", "test_connection"]], "airflow.providers.common.sql.operators": [[4, 0, 0, "-", "sql"]], "airflow.providers.common.sql.operators.sql": [[4, 1, 1, "", "SQLColumnCheckOperator"], [4, 1, 1, "", "SQLTableCheckOperator"], [4, 4, 1, "", "parse_boolean"]], "airflow.providers.common.sql.operators.sql.SQLColumnCheckOperator": [[4, 3, 1, "", "column_checks"], [4, 2, 1, "", "execute"]], "airflow.providers.common.sql.operators.sql.SQLTableCheckOperator": [[4, 2, 1, "", "execute"], [4, 3, 1, "", "sql_check_template"], [4, 3, 1, "", "sql_min_template"]], "airflow.providers.common.sql.sensors": [[6, 0, 0, "-", "sql"]], "airflow.providers.common.sql.sensors.sql": [[6, 1, 1, "", "SqlSensor"]], "airflow.providers.common.sql.sensors.sql.SqlSensor": [[6, 2, 1, "", "poke"], [6, 3, 1, "", "template_ext"], [6, 3, 1, "", "template_fields"], [6, 3, 1, "", "ui_color"]], "tests.system.providers.common": [[8, 0, 0, "-", "sql"]], "tests.system.providers.common.sql": [[7, 0, 0, "-", "example_sql_column_table_check"]], "tests.system.providers.common.sql.example_sql_column_table_check": [[7, 5, 1, "", "AIRFLOW_DB_METADATA_TABLE"], [7, 5, 1, "", "column_check"], [7, 5, 1, "", "connection_args"], [7, 5, 1, "", "test_run"]]}, "objtypes": {"0": "py:module", "1": "py:class", "2": "py:method", "3": "py:attribute", "4": "py:function", "5": "py:data"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "class", "Python class"], "2": ["py", "method", "Python method"], "3": ["py", "attribute", "Python attribute"], "4": ["py", "function", "Python function"], "5": ["py", "data", "Python data"]}, "titleterms": {"airflow": [0, 1, 2, 3, 4, 5, 6, 9, 11], "provid": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11], "common": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11], "sql": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13], "hook": [0, 1], "submodul": [0, 3, 5, 8], "modul": [1, 4, 6, 7], "content": [1, 4, 6, 7, 11], "class": [1, 4, 6], "subpackag": 2, "oper": [3, 4, 13], "function": 4, "sensor": [5, 6], "test": [7, 8], "system": [7, 8], "example_sql_column_table_check": 7, "packag": [9, 11, 12], "apach": [9, 11], "1": [9, 11], "0": [9, 11], "connect": 10, "db": 10, "default": 10, "id": 10, "guid": 11, "refer": 11, "resourc": 11, "commit": 11, "instal": [11, 12], "changelog": 11, "from": 12, "sourc": 12, "releas": 12, "integr": 12, "verifi": 12, "pypi": 12, "check": 13, "tabl": 13, "column": 13, "valu": 13}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.viewcode": 1, "sphinx.ext.intersphinx": 1, "sphinx": 56}})