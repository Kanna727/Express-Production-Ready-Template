.PHONY: _pwd_prompt decrypt_conf encrypt_conf
 
CONF_FILE=.env-cmdrc
# 'private' task for echoing instructions
_pwd_prompt:
	@echo Contact your@email.com for the password
 
# to create .env-cmdrc
decrypt_conf: _pwd_prompt
	openssl cast5-cbc -d -in ${CONF_FILE}.cast5 -out ${CONF_FILE}
	chmod 600 ${CONF_FILE}
 
# for encrypting .env-cmdrc
encrypt_conf: _pwd_prompt
	openssl cast5-cbc -e -in ${CONF_FILE} -out ${CONF_FILE}.cast5