docker-compose down && docker-compose rm -vf
docker-compose build && docker-compose up -d
docker-compose run tests npm run visualRegressionTests -- --host selenium
docker ps -a
docker cp $(docker ps -aqf "name=tests_run_1"):/tests/screenshots ./screenshots_copy
# docker cp  nicetophat_tests_1:/tests/screenshots ./screenshots_copy
docker rm -vf $(docker ps -aq)
docker volume rm $(docker volume ls -qf name="screenshots")

result=$?
exit $result