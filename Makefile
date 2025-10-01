emulate-auth:
	cd auth && \
	firebase emulators:start --only auth

sing-in:
	cd singup && \
	node --experimental-specifier-resolution=node signup.js	
