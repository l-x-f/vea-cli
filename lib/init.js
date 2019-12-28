const chalk = require('chalk')
const Prompt = require('inquirer')

const clone = require('./clone')

const remote = 'github:l-x-f/admin-template#dev'

const initQuestions = name => [
  {
    type: 'confirm',
    name: 'isInit',
    message: `确定要在${chalk.green(name)}文件夹下创建项目?`,
    prefix: '?'
  }
]

const init = async name => {
  try {
    const { isInit } = await Prompt.prompt(initQuestions(name))
    if (isInit) {
      await clone(remote, name)
    } else {
      console.log(chalk.red('程序提前结束'))
    }
  } catch (error) {
    console.log(chalk.red(error))
  }
}

module.exports = init
