import React from 'react'
import { Link } from 'react-router-dom'

export const LinksList = ({ links }) => {

    if(!links.length) {
        return (
            <p className="center">Ссылок пока нет</p>
        )
    }
    return (
        <table>
        <thead>
          <tr>
              <th>№</th>
              <th>Оригинальная ссылка</th>
              <th>Сокращенная ссылка</th>
              <th>Открыть</th>
          </tr>
        </thead>

        <tbody>
            {links.map((el, ind) => {
                return (
                    <tr key={el._id}>
                        <td>{ind+1}</td>
                        <td>{el.from}</td>
                        <td>{el.to}</td>
                        <td>
                            <Link to={`detail/${el._id}`}>Открыть</Link>
                        </td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    )
}
