/* eslint-disable import/prefer-default-export */
import axios from '../libs/api.request';

function HTTPPost(url) {
    return function (data) {
        return axios.request({
            url,
            method: 'post',
            data,
        }).then((res) => {
            if (res.data.status === 200) {
                return res.data.data;
            }
            throw new Error(res.data.msg);
        }, () => {
            throw new Error('服务器开小差了~');
        });
    };
}

// export default {
//   HTTPPost
// }

export { HTTPPost };
